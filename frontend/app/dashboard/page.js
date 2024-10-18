



"use client"

import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import MonthSelection from '../_components/MonthSelection'
import { useState } from 'react'
import GradeSelect from '../_components/GradeSelect'
import GlobalApi from '../_services/GlobalApi'
import moment from 'moment'
import StatusList from './_components/StatusList'
import { MySqlColumnBuilderWithAutoIncrement } from 'drizzle-orm/mysql-core'
import BarChartComp from './_components/BarChart'
import PieChartComp from './_components/PieChartComp'

function Dashboard() {
    const { setTheme } = useTheme()

    const [selectedMonth,setSelectedMonth]=useState();
    const [selectedGrade,setSelectedGrade]=useState();
    const [attendanceList,setAttendanceList]=useState();
    const [totalPresentData,setTotalPresendDate]=useState([]);
    

    useEffect(()=> {
        // setTheme('light');
        GetTotalPresentCountByDay();
        getStudentAttendance();
        
    },[selectedMonth||selectedGrade])

  //   useEffect(()=> {
  //     // setTheme('light');
  //     getStudentAttendance();
  //     GetTotalPresentCountByDay();
  // },[selectedMonth])

    const getStudentAttendance=()=>{
      GlobalApi.GetAttendanceList(selectedGrade,moment(selectedMonth).format('MM/yyyy'))
      .then(resp=>{
        setAttendanceList(resp.data);
      })
    }

    const GetTotalPresentCountByDay=()=>{
      GlobalApi.TotalPresentCountByDay(moment(selectedMonth).format('MM/yyyy'),selectedGrade)
      .then(resp=>{
        setTotalPresendDate(resp.data);
      })
    }

  return (
    <div className='p-10'>
      <div className='flex items-center justify-between'>
          <h2 className='font-bold text-2xl'>Dashboard</h2>
      
          <div className='flex items-center gap-4'>
            <MonthSelection selectedMonth={setSelectedMonth}/>
            <GradeSelect selectedGrade={(v)=>setSelectedGrade(v)}/>
          </div>

      </div>
        
        <StatusList attendanceList={attendanceList}/>
        
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='md:col-span-2'>
          <BarChartComp attendanceList={attendanceList}
          totalPresentData={totalPresentData}/>
        </div>
        <div>
            <PieChartComp attendanceList={attendanceList}/>
        </div>
        </div>
    </div>
  )
}

export default Dashboard

