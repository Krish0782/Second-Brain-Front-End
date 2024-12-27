
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

export function CreateContentModel({ open, onclose }) {
    return (
        <div>
            {open && (
                <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center" style={{ zIndex: 10, backgroundColor: 'rgba(128, 128, 128, 0.6)' }}>
                    <div className="flex flex-col justify-center" style={{ zIndex: 20 }}>
                        <span className="bg-white p-4 rounded shadow-lg">
                            <div className="flex justify-end">
                                <div className="transition-transform duration-200 ease-in-out cursor-pointer hover:scale-125 hover:text-purple-600" onClick={onclose}>
                                    <CrossIcon />
                                </div>
                            </div>
                            <div>
                                <Input placeholder={"Title"} />
                                <Input placeholder={"Link"} />
                                <Input placeholder={"Description"} />
                            </div>
                            <div className="flex justify-center pt-4">
                                <Button varient="primary" text={"Submit"} />
                            </div>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

function Input({ onchange, placeholder }: { onchange: () => void; placeholder: string }) {
    return <input placeholder={placeholder} type={"text"} className="px-5 py-3 flex border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-200" onChange={onchange} />
}
