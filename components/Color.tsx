interface ColorProps{
    name: string
    type: "simple" | "gradient"
}

export function Color ({name, type}: ColorProps) {
    return (
        <div className="space-y-1">
            <div className="p-1.5 rounded-2xl border border-gray-300 cursor-pointer">
                <span className="size-9 rounded-xl flex">
                    {type=== "simple" ? 
                        <div className={`bg-${name} h-full w-full rounded-xl`}></div> 
                        : 
                        <>
                            <div className={`bg-${name}-800 h-full w-1/4 rounded-l-xl`}></div>
                            <div className={`bg-${name}-600 h-full w-1/4`}></div>
                            <div className={`bg-${name}-400 h-full w-1/4`}></div>
                            <div className={`bg-${name}-200 h-full w-1/4 rounded-r-xl`}></div>
                        </>
                    }
                </span>
            </div>
            <h6 className="text-sm text-center capitalize">{name}</h6>
        </div>
    )
}