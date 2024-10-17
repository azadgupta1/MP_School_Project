import { getUniqueRecord } from '@/app/_services/service';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Card from './Card';
import { GraduationCap, TrendingDown, TrendingUp } from 'lucide-react';

function StatusList({ attendanceList }) {
    const [totalStudents, setTotalStudents] = useState(0);
    const [presentPerc, setPresentPerc] = useState(0);

    useEffect(() => {
        if (attendanceList) {
            // Get the unique student records
            const totalSt = getUniqueRecord(attendanceList);
            setTotalStudents(totalSt.length); // Set the total number of students

            const today = moment().date(); // Get today's date (1-31)

            // Calculate the present percentage safely
            if (totalSt.length > 0 && today > 0) {
                const presentCount = attendanceList.filter(item => item.present).length; // Count of present students
                const PresentPerc = (presentCount / (totalSt.length * today)) * 100;
                setPresentPerc(PresentPerc); // Update present percentage state
                console.log('Present Percentage:', PresentPerc.toFixed(2)); // Log the present percentage
            } else {
                setPresentPerc(0); // Set present percentage to 0 if no attendance or students
                console.log('Present Percentage: 0'); // Log 0 if no attendance or students
            }
        }
    }, [attendanceList]); // Add attendanceList as a dependency

    return (
        <div className='grid grid-cols-1
        md:grid-cols-2 lg:grid-cols-3 gap-5 my-6'>
            <Card icon={<GraduationCap />} title='Total Student' value={totalStudents} />
            <Card icon={<TrendingUp />} title='Total % Present' value={presentPerc.toFixed(1)} />
            <Card icon={<TrendingDown />} title='Total % Absent' value={(100 - presentPerc).toFixed(1)} />
        </div>
    );
}

export default StatusList;












