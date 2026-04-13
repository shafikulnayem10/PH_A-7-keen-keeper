"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import initialFriends from '../../../public/data.json';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [friends] = useState(initialFriends);
  const [activities, setActivities] = useState([]);

  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('keen_activities') || '[]');
    setActivities(saved.slice().reverse());
  }, []);

  
  const addActivity = (type, friend) => {
    const newEntry = {
      type,
      friendName: friend.name,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString('en-GB'),
    };

    const updatedActivities = [newEntry, ...activities];
    setActivities(updatedActivities);
    
    
    const rawExisting = JSON.parse(localStorage.getItem('keen_activities') || '[]');
    localStorage.setItem('keen_activities', JSON.stringify([...rawExisting, newEntry]));

    toast.success(`Logged ${type} with ${friend.name}!`); //
  };

  return (
    <FriendContext.Provider value={{ friends, activities, addActivity }}>
      {children}
    </FriendContext.Provider>
  );
};

