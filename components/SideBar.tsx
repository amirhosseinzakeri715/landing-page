import { Switch } from "./Switch"
import { SideBarAccordion } from "./SideBarAccordion"

const SideBar= () =>{    
    return (
        <div className="px-5 py-4 border border-gray-300 rounded-lg">
            <h2 className="font-medium text-2xl mb-5">Filters</h2>
            <Switch title="Best items only"/>
            <SideBarAccordion title="Rate" description={
                <>
                    <input
                        min={0}
                        max={4}
                        step={1}
                        type="range"
                        className="range w-full cursor-pointer accent-blue-500"
                    />
                    <div className="flex justify-between px-2.5 text-xs text-gray-300">
                        {Array(5).fill("|").map((item, index) =>(
                            <span key={index}>{item}</span>
                        ))}
                    </div>
                </>
            }/>
        </div>
    )
}
export default SideBar;