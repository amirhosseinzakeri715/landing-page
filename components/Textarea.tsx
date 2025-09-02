"use client"

import React from "react"

interface IInputProps extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string
  error?: string
}

export const TextArea: React.FC<IInputProps> = ({ error, label, ...props}) =>{
  return (
    <div className="relative w-full">
      <textarea {...props} placeholder=""
        className="peer w-full bg-transparent text-slate-700 min-h-[58px] text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      />
      <label className="absolute cursor-text bg-slate-100 px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left 
        peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90
        peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-400 peer-[:not(:placeholder-shown)]:scale-90">
        {label}
      </label>
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  )
}