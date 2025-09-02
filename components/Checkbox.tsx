export const CheckBox: React.FC<{title: string}>= ({title}) =>{
    return (
        <span className="flex items-center gap-x-2.5">
            <input type="checkbox" className="size-4 cursor-pointer"/>
            <h6 className="text-[1rem]">{title}</h6>
        </span>
    )
}