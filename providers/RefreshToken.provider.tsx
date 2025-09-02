"use client"

import React from 'react'
import Cookies from 'js-cookie'
import { refreshToken } from '@/apis/users.api'
import { useQuery } from '@tanstack/react-query'

interface IRefreshContext {
    isError: boolean
    isLoading: boolean
    isSuccess: boolean
    data?: {
        access: string
        refresh: string
    }
}

const RefreshContext= React.createContext<IRefreshContext | undefined>(undefined);

export const RefreshProvider: React.FC<IChildren>= ({ children }) =>{
    const token= Cookies.get("refresh");
    const response= useQuery({
        retry: 0,
        enabled: !!token,
        queryKey: ["refreshToken"],
        refetchOnWindowFocus: false,
        refetchInterval: 5* 60* 1000,
        refetchIntervalInBackground: true,
        queryFn: () => refreshToken(token as string)
    })

    React.useEffect(() =>{
        if (response.isSuccess) {
            Cookies.set("access", response.data.access);
            Cookies.set("refresh", response.data.refresh);
        }else {
            Cookies.remove("access");
            Cookies.remove("refresh");
        }
    }, [response.isSuccess, response.data])

    return (
        <RefreshContext.Provider value={response}>
            {children}
        </RefreshContext.Provider>
    )
}