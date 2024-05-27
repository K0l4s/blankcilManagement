import React from 'react'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className="title">
            <p>PODCAST DASHBOARD</p>
        </div>
        <div className="date">
                <label htmlFor="startDate">Start Date:</label>
                <input type="date" name="startDate" id="startDate"/>
                <label htmlFor="endDate">End Date:</label>
                <input type="date" name="endDate" id="endDate"/>
            </div>
        <div className="management">
            <div className="itemBox">
                <h1>TỔNG SỐ PODCAST</h1>
                <h1>0</h1>
            </div>
            <div className="itemBox">
                <h1>TỔNG SỐ NGƯỜI DÙNG</h1>
                <h1>0</h1>
            </div>
        </div>
    </div>
  )
}

export default Dashboard