import { useState, useEffect } from "react";
import AddBar from './components/Addbar';
import Taskchart from './components/Taskchart';
import './App.css'

export default function App() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

const deleteTask = (indexDelete) => {
  console.log("Lösche Task", indexDelete);
  setTasks(prevTasks =>
    prevTasks.filter((_, index) => index !== indexDelete)
  );
};


  const toggleCheck = (index) => {
    setTasks(prevTasks =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, {id: crypto.randomUUID(), text: task, checked: false }]);
    setTask("");
  };

  return (
    <>
    <main className="bg-[url(public/assets/background.jpg)] bg-bottom bg-cover h-screen w-full flex justify-center items-center flex-col gap-5">
      <AddBar task={task} setTask={setTask} addTask={addTask}/>
      <Taskchart task={task} tasks={tasks} toggleCheck={toggleCheck} deleteTask={deleteTask}/>
    </main>
    </>
  )
}