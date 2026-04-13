"use client";
import React, { useEffect, useState } from 'react';
import { useFriends } from '@/hooks/useFriendsHook/useFriends';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const StatsPage = () => {
  const { activities } = useFriends();
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => {
    setMounted(true);
  }, []);

  const dataMap = activities.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = [
    { name: 'Call', value: dataMap['Call'] || 0, color: '#1d4239' },
    { name: 'Text', value: dataMap['Text'] || 0, color: '#a855f7' },
    { name: 'Video', value: dataMap['Video'] || 0, color: '#22c55e' },
  ].filter(item => item.value > 0);

  
  if (!mounted) return null;

  return (
    <div className="max-w-5xl mx-auto py-16 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-slate-900 mb-10">Friendship Analytics</h1>

      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-700 mb-6">By Interaction Type</h3>
        
        
        <div style={{ width: '100%', height: '400px' }} className="relative"> 
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Legend iconType="circle" verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400 border-2 border-dashed border-slate-100 rounded-xl">
              <p>No interaction data available to chart.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;