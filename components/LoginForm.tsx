"use client"

import React from "react"
import Cookies from "js-cookie"
import { Input } from "./Input"
import { useLogin } from "@/apis/mutation"
import { Schema, SchemaType } from "@/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"

export default function LoginForm() {
    const {control, handleSubmit, reset}= useForm<SchemaType>({
        resolver: zodResolver(Schema),
        mode:"all"
    })
    
    const log= useLogin();
    const submit= (data: SchemaType) =>{
        log.mutate(data);
    }

    React.useEffect(() =>{
        if (!log.data || !log.isSuccess) return;
        reset();
        Cookies.set("access", log.data.access);
        Cookies.set("refresh", log.data.refresh);
    }, [log.data, log.isSuccess, reset])
    React.useEffect(() =>{
        if (!log.error || !log.isError) return;
            console.error("Error")
    }, [log.error, log.isError])

    return (
        <form className="max-w-80 w-full space-y-4" onSubmit={handleSubmit(submit)}>
            <Controller defaultValue="" name='username' control={control} render={({field, fieldState: {error}}) =>(
                <Input {...field} error={error?.message} label="Username"/>
            )}/>
            <Controller defaultValue="" name='password' control={control} render={({field, fieldState: {error}}) =>(
                <Input type="password" {...field} error={error?.message} label="Password"/>
            )}/> 
            <button className="cursor-pointer w-full text-slate-400 hover:text-slate-500">Forgot Password?</button>
            <button type="submit" className="text-white bg-blue-500 hover:bg-blue-700 rounded-lg cursor-pointer w-full py-2">Login</button>
        </form>
    )
}