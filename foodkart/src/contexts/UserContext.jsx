import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

import React from 'react'
export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const call=  async() => {
        await axios.get('/profile').then(({data}) => {
            setUser(data)
        })
        if(window.location.pathname==='' || window.location.pathname==='register')
        setUser(null)
    }
    useEffect(() => { 
        if(!user)
        {
            call();
        }
    })
  return (
    <UserContext.Provider value ={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
