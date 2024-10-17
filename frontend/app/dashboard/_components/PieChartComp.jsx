import { getUniqueRecord } from '@/app/_services/service';
import React, { useEffect } from 'react'
import { Pie, PieChart, ResponsiveContainer } from 'recharts'
import { useState } from 'react';
import moment from 'moment';

function PieChartComp({attendanceList}) {

    const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
    ]

    const [data,setData]=useState([]);

    useEffect(()=>{
        console.log(attendanceList);
        if(attendanceList){
            const totalSt=getUniqueRecord(attendanceList);
            const today=moment().format('D');
            const PresentPerc=(attendanceList.length/(totalSt.length*Number(today))*100);

            setData([
                {
                    name:'Total Present',
                    value:PresentPerc,
                    fill:'#8884d8'
                },
                {
                    name:'Total Absent',
                    value:100 - PresentPerc,
                    fill:'#82ca9d'
                }
            ])
        }
    },[attendanceList])


  return (
    <div className='border p-5 rounded-lg gap-5'>
        <h2 className='font-bold text-lg'>Monthly Attendance</h2>
        <ResponsiveContainer width={'100%'} height={300}>
        <PieChart width={730} height={250}>
            
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
        </ResponsiveContainer>
    </div>
  )
}

export default PieChartComp