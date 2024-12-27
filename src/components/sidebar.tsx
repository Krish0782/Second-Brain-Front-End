import { BrainIcon } from "../icons/BrainIcon";
import { DocumentIcon } from "../icons/documentIcon";
import { HashtagIcon } from "../icons/HashtagIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./sidebarItems";

export function Sidebar() {
    return <div className="h-screen border-r bg-white w-72 fixed left-0 top-0 pl-6 pt-4">
            <div className="flex text-lg font-semibold items-center ">
                <div className="pr-4">
                    <BrainIcon /></div>
                Second Brain
            </div>
            <div className="pt-4 pl-6" >
                <SidebarItem text="Tweets" icon={<TwitterIcon />} />
                <SidebarItem text="Videos" icon={<YoutubeIcon />} />
                <SidebarItem text="Documents" icon={<DocumentIcon />} />
                <SidebarItem text="Links" icon={<LinkIcon />} />
                <SidebarItem text="Tags" icon={<HashtagIcon />} />
            </div>
    </div>
}