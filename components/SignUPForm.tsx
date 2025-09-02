"use client"

import React from "react"
import { Input } from "./Input"
import { useSignUp } from "@/apis/mutation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import { SignUpSchema, SignUpSchemaType } from "@/validation"

export default function SignUpForm() {
    const {control, handleSubmit, reset}= useForm<SignUpSchemaType>({
        resolver: zodResolver(SignUpSchema),
        mode:"all"
    })
    
    const sign= useSignUp();
    const submit= (data: SignUpSchemaType) =>{
        sign.mutate(data);
    }

    React.useEffect(() =>{
        if (!sign.data || !sign.isSuccess) return;
        console.log("ok");
        reset();
    }, [sign.data, sign.isSuccess, reset])
    React.useEffect(() =>{
        if (!sign.error || !sign.isError) return;
            console.error("nok")
    }, [sign.error, sign.isError])

    return (
        <form className="max-w-80 w-full space-y-4" onSubmit={handleSubmit(submit)}>
            <Controller defaultValue="" name='email' control={control} render={({field, fieldState: {error}}) =>(
                <Input type="email" {...field} error={error?.message} label="Email"/>
            )}/>
            <Controller defaultValue="" name='username' control={control} render={({field, fieldState: {error}}) =>(
                <Input {...field} error={error?.message} label="Username"/>
            )}/>
            <Controller defaultValue="" name='password' control={control} render={({field, fieldState: {error}}) =>(
                <Input type="password" {...field} error={error?.message} label="Password"/>
            )}/>
            <button type="submit" className="text-white bg-blue-500 hover:bg-blue-700 rounded-lg cursor-pointer w-full py-2">Sign Up</button>
        </form>
    )
}