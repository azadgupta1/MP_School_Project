"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import GlobalApi from '@/app/_services/GlobalApi'
import { toast } from 'sonner'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { LoaderIcon } from 'lucide-react'

function AddNewStudent({refreshData}) {
    const [open, setOpen] = useState(false);
    const [grades, setGrades]=useState([]);
    const [loading,setLoading]=useState(false);
    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    useEffect(()=>{
        GetAllGradesList();
    },[])
    
    const GetAllGradesList=()=>{
        GlobalApi.GetAllGrades().then(resp=>{
            setGrades(resp.data);
        }) 
    }
    const onSubmit = (data) => {
        setLoading(true);
        GlobalApi.CreateNewStudent(data).then(resp=>{
            console.log("--",resp);
            if(resp.data){
                reset();
                refreshData();
                setOpen(false);
                toast('New Student Added !')

            }
            setLoading(false);
        })
    };

    return (
        <div>
            <Button onClick={() => setOpen(true)}>+ Add New Student</Button>
            <Dialog open={open}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add New Students</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='py-2'>
                                    <label>Full Name</label>
                                    <Input placeholder='E.g. John Doe' 
                                           {...register('name', {required: true})} />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label>Select Grade</label>
                                    <select className='p-3 border rounded-lg' 
                                        {...register('grade', {required: true})}>
                                            {grades.map((item,index)=>(
                                                <option key={index} value={item.grade}>{item.grade}</option>
                                            ))}

                                    </select>
                                </div>
                                <div className='py-2'>
                                    <label>Contact Number</label>
                                    <Input type="number" placeholder='E.g. 9843378236' 
                                           {...register('contact')} />
                                </div>
                                <div className='py-2'>
                                    <label>Address</label>
                                    <Input placeholder='E.g. 525 N tryon Streen, Mumbai' 
                                           {...register('address')} />
                                </div>
                                <div className='flex gap-3 items-center justify-end mt-5'>
                                    <Button type="button" 
                                    onClick={() => setOpen(false)} variant="ghost">Cancel</Button>
                                    <Button 
                                    type="submit"
                                    disable={loading}
                                    >
                                        {loading? <LoaderIcon className='animate-spin'/>:
                                            'Save'}</Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddNewStudent;


// "use client"

// import React, { useEffect, useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { Input } from "@/components/ui/input"
// import { useForm } from 'react-hook-form'
// import GlobalApi from '@/app/_services/GlobalApi'
// import { toast } from 'sonner'
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
// } from "@/components/ui/dialog"
// import { LoaderIcon } from 'lucide-react'

// function AddNewStudent({refreshData}) {
//     const [open, setOpen] = useState(false);
//     const [grades, setGrades] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const { register, handleSubmit, reset, formState: { errors } } = useForm();

//     useEffect(() => {
//         GetAllGradesList();
//     }, [])

//     const GetAllGradesList = () => {
//         GlobalApi.GetAllGrades().then(resp => {
//             setGrades(resp.data);
//         }).catch(error => {
//             console.error("Failed to fetch grades", error);
//         });
//     }

//     const onSubmit = (data) => {
//         console.log("Submitted data: ", data); // Log the form data for debugging
//         if (Object.keys(errors).length === 0) { // Check if there are no form validation errors
//             setLoading(true);
//             GlobalApi.CreateNewStudent(data).then(resp => {
//                 console.log("API response: ", resp);
//                 if (resp.data) {
//                     reset();
//                     refreshData();
//                     setOpen(false);
//                     toast('New Student Added!');
//                 }
//                 setLoading(false);
//             }).catch(error => {
//                 console.error("Failed to add new student", error);
//                 setLoading(false);
//             });
//         }
//     };

//     return (
//         <div>
//             <Button onClick={() => setOpen(true)}>+ Add New Student</Button>
//             <Dialog open={open}>
//                 <DialogContent>
//                     <DialogHeader>
//                         <DialogTitle>Add New Student</DialogTitle>
//                         <DialogDescription>
//                             <form onSubmit={handleSubmit(onSubmit)}>
//                                 <div className='py-2'>
//                                     <label>Full Name</label>
//                                     <Input placeholder='E.g. John Doe' 
//                                         {...register('name', { required: true })} />
//                                     {errors.name && <p className="text-red-500">Name is required</p>}
//                                 </div>
//                                 <div className='flex flex-col py-2'>
//                                     <label>Select Grade</label>
//                                     <select className='p-3 border rounded-lg' 
//                                         {...register('grade', { required: true })}>
//                                         {grades.map((item, index) => (
//                                             <option key={index} value={item.grade}>{item.grade}</option>
//                                         ))}
//                                     </select>
//                                     {errors.grade && <p className="text-red-500">Grade is required</p>}
//                                 </div>
//                                 <div className='py-2'>
//                                     <label>Contact Number</label>
//                                     <Input type="number" placeholder='E.g. 9843378236' 
//                                         {...register('contact')} />
//                                 </div>
//                                 <div className='py-2'>
//                                     <label>Address</label>
//                                     <Input placeholder='E.g. 525 N Tryon Street, Mumbai' 
//                                         {...register('address')} />
//                                 </div>
//                                 <div className='flex gap-3 items-center justify-end mt-5'>
//                                     <Button type="button" 
//                                         onClick={() => setOpen(false)} 
//                                         variant="ghost">Cancel</Button>
//                                     <Button 
//                                         type="submit" 
//                                         disabled={loading}>
//                                         {loading ? <LoaderIcon className='animate-spin' /> : 'Save'}
//                                     </Button>
//                                 </div>
//                             </form>
//                         </DialogDescription>
//                     </DialogHeader>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     );
// }

// export default AddNewStudent;
