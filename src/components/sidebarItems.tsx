import { ReactElement } from "react";

export function SidebarItem({ text, icon }: {
    text: string;
    icon: ReactElement
}) {
    return <div className="flex items-center text-gray-700 py-2 pt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="pr-2">
           {icon}
        </div>
        <div>
            {text}
        </div>
    </div>

}