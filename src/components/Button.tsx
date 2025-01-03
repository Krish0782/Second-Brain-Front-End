import { ReactElement } from "react";

interface Button {
    varient : "primary" | "secondary",
    text : String,
    startIcon : ReactElement,
    onClick?:() => void
}

const varientClasses = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600"
}

const defaultStyles = "px-4 py-2 rounded-md font-normal flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
export function Button ({varient,text,startIcon,onClick}: Button){
    return <button onClick={onClick} className={`${varientClasses[varient]} ${defaultStyles}`}>
        <div className="pr-2">
        {startIcon} 

        </div>
        {text} 
        </button>
}