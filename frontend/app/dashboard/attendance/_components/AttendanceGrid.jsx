
import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import moment from 'moment';
import GlobalApi from '@/app/_services/GlobalApi';
import { toast } from 'sonner';

const pagination = true;
const paginationPageSize = 10;
const paginationPageSizeSelector = [25, 50, 100];

function AttendanceGrid({ attendanceList, selectedMonth }) {
    const [rowData, setRowData] = useState([]);
    const [colDefs, setColDefs] = useState([
        { field: 'studentId', filter: true },
        { field: 'name', filter: true }
    ]);

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

    useEffect(() => {
        if (attendanceList && selectedMonth) {
            const year = moment(selectedMonth).format('yyyy');
            const month = moment(selectedMonth).format('MM') - 1; // Convert to 0-indexed month
            const numberOfDays = daysInMonth(year, month);
            
            const daysArrays = Array.from({ length: numberOfDays }, (_, i) => i + 1);
            
            const userList = getUniqueRecord();
            setRowData(userList);

            // Reset colDefs to initial values for studentId and name
            setColDefs([
                { field: 'studentId', filter: true },
                { field: 'name', filter: true }
            ]);

            // Dynamically add date columns
            daysArrays.forEach((date) => {
                setColDefs(prevData => [...prevData, {
                    field: date.toString(), width: 50, editable: true
                }]);

                userList.forEach(obj => {
                    obj[date] = isPresent(obj.studentId, date);
                });
            });
        }
    }, [attendanceList, selectedMonth]);

    const isPresent = (studentId, day) => {
        const result = attendanceList.find(item => item.day == day && item.studentId == studentId);
        return result ? true : false;
    };

    // Function to get unique student records
    const getUniqueRecord = () => {
        const uniqueRecord = [];
        const existingUser = new Set();

        attendanceList?.forEach(record => {
            if (!existingUser.has(record.studentId)) {
                existingUser.add(record.studentId);
                uniqueRecord.push(record);
            }
        });

        return uniqueRecord;
    };

    const onMarkAttendance = (day, studentId, presentStatus) => {
        const date = moment(selectedMonth).format('MM/yyyy');
        if (presentStatus) {
            // Define the data object
            const data = {
                day: day,
                studentId: studentId,
                present: presentStatus,
                date: date
            };

            // Send data to API
            GlobalApi.MarkAttendance(data).then(resp => {
                console.log(resp);
                toast(`Student Id: ${studentId} Marked as Present`);
            });
        } else {
            GlobalApi.MarkAbsent(studentId, day, date)
            .then(resp => {
                toast("Student Id: " + studentId + " Marked as absent");
            });
        }
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div
                className="ag-theme-quartz" // applying the Data Grid theme
                style={{ height: '500px', width: '100%' }} // the Data Grid will fill the size of the parent container
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    onCellValueChanged={(e) => onMarkAttendance(e.colDef.field, e.data.studentId, e.newValue)}
                    pagination={pagination}
                    paginationPageSize={paginationPageSize}
                    paginationPageSizeSelector={paginationPageSizeSelector}
                />
            </div>
        </div>
    );
}

export default AttendanceGrid;



















// import React, { useEffect, useState } from 'react';
// import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
// import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
// import moment from 'moment';
// import GlobalApi from '@/app/_services/GlobalApi';
// import { toast } from 'sonner';

// const pagination = true;
// const paginationPageSize = 10;
// const paginationPageSizeSelector = [25, 50, 100];

// function AttendanceGrid({ attendanceList, selectedMonth }) {
    
//     const [rowData, setRowData] = useState([]);
//     const [colDefs, setColDefs] = useState([
//         { field: 'studentId', filter: true },
//         { field: 'name', filter: true }
//     ]);

//     const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

//     useEffect(() => {
//         if (attendanceList && selectedMonth) {
//             const year = moment(selectedMonth).format('yyyy');
//             const month = moment(selectedMonth).format('MM') - 1; // Convert to 0-indexed month
//             const numberOfDays = daysInMonth(year, month);
            
//             const daysArrays = Array.from({ length: numberOfDays }, (_, i) => i + 1);
            
//             const userList = getUniqueRecord();
//             setRowData(userList);

//             // Reset colDefs to initial values for studentId and name
//             setColDefs([
//                 { field: 'studentId', filter: true },
//                 { field: 'name', filter: true }
//             ]);

//             // Dynamically add date columns
//             daysArrays.forEach((date) => {
//                 setColDefs(prevData => [...prevData, {
//                     field: date.toString(), width: 50, editable: true
//                 }]);

//                 userList.forEach(obj => {
//                     obj[date] = isPresent(obj.studentId, date);
//                 });
//             });
//         }
//     }, [attendanceList, selectedMonth]);

//     const isPresent = (studentId, day) => {
//         const result = attendanceList.find(item => item.day == day && item.studentId == studentId);
//         return result ? true : false;
//     };

//     // Function to get unique student records
//     const getUniqueRecord = () => {
//         const uniqueRecord = [];
//         const existingUser = new Set();

//         attendanceList?.forEach(record => {
//             if (!existingUser.has(record.studentId)) {
//                 existingUser.add(record.studentId);
//                 uniqueRecord.push(record);
//             }
//         });

//         return uniqueRecord;
//     };

//     const onMarkAttendance = (day, studentId, presentStatus) => {
//         const date = moment(selectedMonth).format('MM/yyyy');
//         if (presentStatus) {
//             // Define the data object
//             const data = {
//                 day: day,
//                 studentId: studentId,
//                 present: presentStatus,
//                 date: date
//             };

//             // Send data to API
//             GlobalApi.MarkAttendance(data).then(resp => {
//                 console.log(resp);
//                 toast(`Student Id: ${studentId} Marked as Present`);
//             });
//         } else {
//             GlobalApi.MarkAbsent(studentId, day, date)
//             .then(resp => {
//                 toast("Student Id: " + studentId + " Marked as absent");
//             });
//         }
//     };

//     return (
//         <div>
//             <div
//                 className="ag-theme-quartz" // applying the Data Grid theme
//                 style={{ height: 500 }} // the Data Grid will fill the size of the parent container
//             >
//                 <AgGridReact
//                     rowData={rowData}
//                     columnDefs={colDefs}
//                     onCellValueChanged={(e) => onMarkAttendance(e.colDef.field, e.data.studentId, e.newValue)}
//                     pagination={pagination}
//                     paginationPageSize={paginationPageSize}
//                     paginationPageSizeSelector={paginationPageSizeSelector}
//                 />
//             </div>
//         </div>
//     );
// }

// export default AttendanceGrid;

























// import React, { useEffect, useState } from 'react';
// import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
// import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
// import moment from 'moment';
// import GlobalApi from '@/app/_services/GlobalApi';
// import { toast } from 'sonner';

// const pagination = true;
// const paginationPageSize = 10;
// const paginationPageSizeSelector = [25, 50, 100];

// function AttendanceGrid({ attendanceList, selectedMonth }) {
    
//     const [rowData, setRowData] = useState([]);
//     const [colDefs, setColDefs] = useState([
//         { field: 'studentId', filter: true },
//         { field: 'name', filter: true }
//     ]);

//     const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
//     const numberOfDays = daysInMonth(moment(selectedMonth).format('yyyy'), moment(selectedMonth).format('MM'));
//     const daysArrays = Array.from({ length: numberOfDays }, (_, i) => i + 1);   

//     useEffect(() => {
//         if (attendanceList) {
//             const userList = getUniqueRecord();
//             setRowData(userList);

//             // Reset colDefs to initial values for studentId and name
//             setColDefs([
//                 { field: 'studentId', filter: true },
//                 { field: 'name', filter: true }
//             ]);

//             // Dynamically add date columns
//             daysArrays.forEach((date) => {
//                 setColDefs(prevData => [...prevData, {
//                     field: date.toString(), width: 50, editable: true
//                 }]);

//                 userList.forEach(obj => {
//                     obj[date] = isPresent(obj.studentId, date);
//                 });
//             });
//         }
//     }, [attendanceList, selectedMonth]);  // Include selectedMonth to reset when month changes

//     const isPresent = (studentId, day) => {
//         const result = attendanceList.find(item => item.day == day && item.studentId == studentId);
//         return result ? true : false;
//     };

//     // Function to get unique student records
//     const getUniqueRecord = () => {
//         const uniqueRecord = [];
//         const existingUser = new Set();

//         attendanceList?.forEach(record => {
//             if (!existingUser.has(record.studentId)) {
//                 existingUser.add(record.studentId);
//                 uniqueRecord.push(record);
//             }
//         });

//         return uniqueRecord;
//     };

//     const onMarkAttendance = (day, studentId, presentStatus) => {
//         const date = moment(selectedMonth).format('MM/yyyy');
//         if (presentStatus) {
//             // Define the data object
//             const data = {
//                 day: day,
//                 studentId: studentId,
//                 present: presentStatus,
//                 date: date
//             };

//             // Send data to API
//             GlobalApi.MarkAttendance(data).then(resp => {
//                 console.log(resp);
//                 toast(`Student Id: ${studentId} Marked as Present`);
//             });
//         } else {
//             GlobalApi.MarkAbsent(studentId, day, date)
//             .then(resp => {
//                 toast("Student Id: " + studentId + " Marked as absent");
//             });
//         }
//     };

//     return (
//         <div>
//             <div
//                 className="ag-theme-quartz" // applying the Data Grid theme
//                 style={{ height: 500 }} // the Data Grid will fill the size of the parent container
//             >
//                 <AgGridReact
//                     rowData={rowData}
//                     columnDefs={colDefs}
//                     onCellValueChanged={(e) => onMarkAttendance(e.colDef.field, e.data.studentId, e.newValue)}
//                     pagination={pagination}
//                     paginationPageSize={paginationPageSize}
//                     paginationPageSizeSelector={paginationPageSizeSelector}
//                 />
//             </div>
//         </div>
//     );
// }

// export default AttendanceGrid;


















// import React, { useEffect, useState } from 'react';
// import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
// import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
// import moment from 'moment';
// import GlobalApi from '@/app/_services/GlobalApi';
// import { toast } from 'sonner';


// const pagination = true;
// const paginationPageSize = 10;
// const paginationPageSizeSelector = [25, 50, 100];


// function AttendanceGrid({ attendanceList, selectedMonth }) {
    
//     const [rowData, setRowData] = useState();
//     const [colDefs, setColDefs] = useState([
//         { field: 'studentId',filter:true},
//         { field: 'name',filter:true}
//     ]);

//     const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
//     const numberOfDays = daysInMonth(moment(selectedMonth).format('yyyy'), moment(selectedMonth).format('MM'));
    
//     const daysArrays = Array.from({ length: numberOfDays }, (_, i) => i + 1);   
//     console.log(daysArrays);
     
//     useEffect(() => {
//         if (attendanceList) {
//             const userList = getUniqueRecord();
//             setRowData(userList);

//             daysArrays.forEach((date) => {
//                 setColDefs(prevData => [...prevData, {
//                     field: date.toString(), width: 50, editable: true
//                 }]);

//                 userList.forEach(obj => {
//                     obj[date] = isPresent(obj.studentId, date);
//                 });
//             });
//         }
//     }, [attendanceList]);

//     const isPresent = (studentId, day) => {
//         const result = attendanceList.find(item => item.day == day && item.studentId == studentId);
//         return result ? true : false;
//     };

//     // Function to get unique student records
//     const getUniqueRecord = () => {
//         const uniqueRecord = [];
//         const existingUser = new Set();

//         attendanceList?.forEach(record => {
//             if (!existingUser.has(record.studentId)) {
//                 existingUser.add(record.studentId);
//                 uniqueRecord.push(record);
//             }
//         });

//         return uniqueRecord;
//     };

//     const onMarkAttendance = (day, studentId, presentStatus) => {
//         const date = moment(selectedMonth).format('MM/yyyy');
//         if(presentStatus){
//         // Define the data object
//         const data = {
//             day: day,
//             studentId: studentId,
//             present: presentStatus,
//             date: date
//         };

//         // Send data to API
//         GlobalApi.MarkAttendance(data).then(resp => {
//             console.log(resp);
//             toast(`Student Id: ${studentId} Marked as Present`);
//         })
//       }
    
//       else{
//         GlobalApi.MarkAbsent(studentId,day,date)
//         .then(resp=>{
//             toast("Student Id:"+studentId+" Marked as absent");
//         })
//       }


//     };

//     return (
//         <div>
//             <div
//                 className="ag-theme-quartz" // applying the Data Grid theme
//                 style={{ height: 500 }} // the Data Grid will fill the size of the parent container
//             >
//                 <AgGridReact
//                     rowData={rowData}
//                     columnDefs={colDefs}
//                     onCellValueChanged={(e) => onMarkAttendance(e.colDef.field, e.data.studentId, e.newValue)}
//                     pagination={pagination}
//                     paginationPageSize={paginationPageSize}
//                     paginationPageSizeSelector={paginationPageSizeSelector}
//                 />
//             </div>
//         </div>
//     );
// }

// export default AttendanceGrid;















// import React, { useEffect, useState } from 'react'
// import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
// import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
// import moment from 'moment';
// import GlobalApi from '@/app/_services/GlobalApi';

// function AttendanceGrid({attendanceList,selectedMonth}) {
    
//     const [rowData,setRowData]=useState();
//     const [colDefs,setColDefs]=useState([
//         {field:'studentId'},
//         {field:'name'}
//     ]);

//     const daysInMonth=(year,month)=>new Date(year,month+1,0).getDate();
//     const numberOfDays=daysInMonth(moment(selectedMonth).format('yyyy'),moment(selectedMonth).format('MM'));
//     const daysArrays=Array.from({length:numberOfDays},(_,i)=>i+1);
     
//     useEffect(()=>{
//         if(attendanceList){
//         const userList=getUniqueRecord();
//         setRowData(userList);

//         daysArrays.forEach((date)=>{
//             setColDefs(prevData=>[...prevData,{
//                 field:date.toString(),width:50,editable:true
//             }])

//             userList.forEach(obj=>{
//                 obj[date]=isPresent(obj.studentId,date);
//             })
//         })
//     }
//     },[attendanceList])

 
//     const isPresent=(studentId,day)=>{
//         const result = attendanceList.find(item=>item.day==day&&item.studentId==studentId)
//         return result?true:false
//     }


//     // Used to Distinct User List

//     const getUniqueRecord=()=>{
//         const uniqueRecord=[];
//         const existingUser=new Set();

//         attendanceList?.forEach(record => {
//             if(!existingUser.has(record.studentId)){
//                 existingUser.add(record.studentId);
//                 uniqueRecord.push(record);
//             }
//         });

//         return uniqueRecord
//     }

//     const onMarkAttendance=(day,studentId,presentStatus)=>{
        
//         const date=moment(selectedMonth).format('MM/yyyy')
//         if(presentStatus){

//             const data={
//             day:day,
//             studentId:studentId,
//             present:presentStatus,
//             date:date
//         }
//         }
//         GlobalApi.MarkAttendance(data).then(resp=>{
//             console.log(resp);
//             toast("Student Id:"+studentId +" Marked as Present"); 
//         })
//     }
    
    
//   return (
//     <div>
//         <div
//             className="ag-theme-quartz" // applying the Data Grid theme
//             style={{ height: 500 }} // the Data Grid will fill the size of the parent container
//             >
//             <AgGridReact
//                 rowData={rowData}
//                 columnDefs={colDefs}
//                 onCellValueChanged={(e)=>onMarkAttendance(e.colDef.field,e.data.studentId,e.newValue)}
//             />
//         </div>
//     </div>
//   )
// }



// export default AttendanceGrid