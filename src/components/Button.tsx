import { ReactElement } from "react";

interface Button {
    varient : "primary" | "secondary",
    text : String,
    startIcon : ReactElement
}

const varientClasses = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600"
}

const defaultStyles = "px-4 py-2 rounded-md font-normal flex items-center"

export function Button ({varient,text,startIcon}: Button){
    return <button className={`${varientClasses[varient]} ${defaultStyles}`}>
        <div className="pr-2">
        {startIcon} 

        </div>
        {text} 
        </button>
}