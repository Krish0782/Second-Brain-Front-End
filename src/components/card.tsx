import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/documentIcon";
import { ShareIcon } from "../icons/ShareIcons";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

interface CardProps {
    title: string;
    heading?: string;
    link?: string;
    type: "twitter" | "youtube" | "documents";
    items?: string[];
}

export function Card({ title, heading, link, type, items }: CardProps) {
    return (
        <div className={`p-4 bg-white rounded-lg border-gray-200 max-w-72 border ${type === "twitter" ? "overflow-visible" : "max-h-72 overflow-hidden"}`}>
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        {type === "twitter" && <TwitterIcon />}
                        {type === "youtube" && <YoutubeIcon />}
                        {type === "documents" && <DocumentIcon />}
                    </div>
                    <div className="font-semibold">{title}</div>
                </div>
                <div className="flex items-center">
                    {link && (
                        <div className="text-gray-500 pr-2">
                            <a href={link} target="_blank">
                                <ShareIcon />
                            </a>
                        </div>
                    )}
                    <div className="text-gray-500">
                        <DeleteIcon />
                    </div>
                </div>
            </div>

            <div className="pt-4">
                {type === "youtube" && link && (
                    <iframe
                        className="w-full"
                        src={link.replace("watch", "embed").replace("?v=", "/")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                )}
                {type === "twitter" && link && (
                    <blockquote className="twitter-tweet">
                        <a href={link.replace("x.com", "twitter.com")}></a>
                    </blockquote>
                )}
                {type === "documents" && items && heading && (
                    <>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{heading}</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            {items.map((item, index) => (
                                <li key={index} className="mb-1">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div >
    );
}
