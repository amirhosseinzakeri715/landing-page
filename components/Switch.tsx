export const Switch: React.FC<{title: string}>= ({title}) =>{
    return (
        <span className="flex py-3 justify-between border-b border-b-gray-300">
            <h4 className="text-[16px]">{title}</h4>
            <label className="relative inline-block w-10 h-5 cursor-pointer">
                <input type="checkbox" className="sr-only peer"/>
                <div className="peer-checked:bg-blue-500 peer-checked:border-0 size-full rounded-full transition border-2 border-gray-400"></div>
                <div className="absolute left-1 top-1 size-3 bg-gray-400 peer-checked:bg-white rounded-full transition peer-checked:translate-x-5"></div>
            </label>
        </span>
    )
}