// "use client"

// import GradeSelect from '@/app/_components/GradeSelect'
// import MonthSelection from '@/app/_components/MonthSelection'
// import React, {useState} from 'react'
// import { Button } from '@/components/ui/button'
// import GlobalApi from '@/app/_services/GlobalApi'
// import moment from 'moment'
// import AttendanceGrid from './_components/AttendanceGrid'


// function Attendance() {
    
//     const [selectedMonth,setSelectedMonth]=useState();
//     const [selectedGrade,setSelectedGrade]=useState();
//     const [attendanceList,setAttendanceList]=useState();
    

//     // Use to fetch attendance list for given month and grade

//     const onSearchHandler=()=>{
        
//         const month=moment(selectedMonth).format('MM/YYYY');
        
//         GlobalApi.GetAttendanceList(selectedGrade,month).then(resp=>{
//             setAttendanceList(resp.data); 
//         })
//     }

//   return (
//     <div className='p-10 '>
//         <h2 className='text-2xl font-bold'>Attendance</h2>
//         {/* Search Option */}
        
//         <div className='flex gap-4 p-5 border rounded-lg shadow-sm'>
//             <div className='flex gap-2 items-center'>
//             <label>Select Month: </label>
//             <MonthSelection selectedMonth={(value)=>setSelectedMonth(value)}/>
//             </div>

//             <div className='flex gap-2 items-center'>
//             <label>Select Grade: </label>
//             <GradeSelect selectedGrade={(v)=>setSelectedGrade(v)}/>
//             </div>

//             <Button onClick={()=>onSearchHandler()}>
//                 Search
//             </Button>
            
//         </div>

//         {/* Search Attendance Grid */}
        
//         <AttendanceGrid attendanceList={attendanceList}
//         selectedMonth={selectedMonth}/>

//     </div>
//   )
// }

// export default Attendance

"use client"

import GradeSelect from '@/app/_components/GradeSelect';
import MonthSelection from '@/app/_components/MonthSelection';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import GlobalApi from '@/app/_services/GlobalApi';
import moment from 'moment';
import AttendanceGrid from './_components/AttendanceGrid';

function Attendance() {
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedGrade, setSelectedGrade] = useState();
  const [attendanceList, setAttendanceList] = useState();

  // Fetch attendance list for a given month and grade
  const onSearchHandler = () => {
    const month = moment(selectedMonth).format('MM/YYYY');

    GlobalApi.GetAttendanceList(selectedGrade, month).then((resp) => {
      setAttendanceList(resp.data);
    });
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Attendance</h2>

      {/* Search Option */}
      <div className="flex flex-col md:flex-row gap-4 p-5 border rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row gap-2 items-center w-full md:w-1/2">
          <label className="w-full sm:w-auto">Select Month: </label>
          <MonthSelection selectedMonth={(value) => setSelectedMonth(value)} />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 items-center w-full md:w-1/2">
          <label className="w-full sm:w-auto">Select Grade: </label>
          <GradeSelect selectedGrade={(v) => setSelectedGrade(v)} />
        </div>

        <div className="flex justify-end w-full">
          <Button onClick={onSearchHandler} className="w-full md:w-auto">
            Search
          </Button>
        </div>
      </div>

      {/* Search Attendance Grid */}
      <AttendanceGrid attendanceList={attendanceList} selectedMonth={selectedMonth} />
    </div>
  );
}

export default Attendance;
