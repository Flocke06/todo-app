


export default function AddBar({task, setTask, addTask}) {

    const handleKey = (e) => {
        if (e.key === "Enter"){
            addTask();
        }
    }

    return (
        <div className="flex justify-center sticky items-center w-[65%] h-12 bg-neutral-200 bg-rounded rounded-4xl">
               
            <input 
                className="w-full text-center focus:outline-none focus:ring-0 focus:border-none border-none"

                type="text"
                value={task}
                onKeyDown={handleKey}
                onChange={(e) => setTask(e.target.value)}
                placeholder = "Neue Aufgabe eingeben"
                />
        </div>
    )
}