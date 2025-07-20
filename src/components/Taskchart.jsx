


export default function Taskchart({ tasks, toggleCheck, deleteTask }) {

    return (

        <div className="flex justify-start items-start w-[65%] min-h-[40%] max-h-[40%] overflow-y-auto scrollbar-hide bg-neutral-200 bg-rounded rounded-4xl text-xl box-border">
            <div className="w-full flex justify-center">
                <ul className="w-[98%]">
                    {tasks.map((item, index) => (
                        <li key={item.id} testID={item.id} className="flex items-center justify-between w-full px-4 py-1 border my-2 rounded-4xl">
                            <div className="flex gap-2 w-full select-none bg-fixed">
                                
                                <button onClick={() => toggleCheck(index)}>
                                    
                                    <img
                                        src={item.checked ? "/src/assets/check.webp" : "/public/assets/circle.png"}
                                        height={18}
                                        width={18}
                                        alt="Status"
                                        role = "checkbox"
                                        draggable= "false"
                                    />
                                </button>
                                <span className={item.checked ? "line-through text-gray-500 select-none" : "select-none" }>
                                    {item.text}
                                </span>
                            </div>

                            <div className="flex select-none">
                                <button
                                    onClick={() => deleteTask(index)}>
                                    <img
                                        src={"/public/assets/trash.png"}
                                        height={23}
                                        width={23}
                                        alt="trash"
                                        draggable="false"
                                    />
                                </button>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}