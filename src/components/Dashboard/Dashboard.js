import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Pie, PieChart, Scatter, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [charts, setCharts] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setCharts(data))
    }, [])

    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-md-6">
                    <AreaChart
                        width={550} height={400}
                        data={charts}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </div>
                <div className="col-md-6">
                    <BarChart
                        width={550}
                        height={400}
                        data={charts}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sell" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
            <div className="row py-5">
                <div className="col-md-6">
                    <ComposedChart
                        width={500}
                        height={400}
                        data={charts}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="month" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                        <Scatter dataKey="sell" fill="red" />
                    </ComposedChart>
                </div>
                <div className="col-md-6">
                    <PieChart width={550} height={400}>
                        <Pie
                            dataKey="sell"
                            startAngle={180}
                            endAngle={0}
                            data={charts}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;