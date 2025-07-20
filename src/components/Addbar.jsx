


export default function AddBar({task, setTask, addTask}) {

    const handleKey = (e) => {
        if (e.key === "Enter"){
            addTask();
        }
    }

    return (
        <div className="shadow-lg shadow-neutral-500/50 flex justify-center sticky items-center w-[55%] h-12 bg-neutral-100 bg-rounded rounded-4xl">
               
            <input 
                className=" todo-item w-full text-center focus:outline-none focus:ring-0 focus:border-none border-none"

                type="text"
                value={task}
                onKeyDown={handleKey}
                onChange={(e) => setTask(e.target.value)}
                placeholder = "Neue Aufgabe eingeben"
                />
        </div>
    )
}