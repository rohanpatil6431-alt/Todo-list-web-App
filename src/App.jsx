import { useState } from "react";
import Navbar from "./Components/Navbar";



export default function App() {
  const [task, setTask] = useState(""); // Stores input text
  const [tasks, setTasks] = useState([]); // Stores list of tasks
  const [editingIndex, setEditingIndex] = useState(null); // Stores index of task being edited
  const [editingText, setEditingText] = useState(""); // Stores new text for editing
  

  // Handle input change
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  // Handle adding a new task
  const handleClick = () => {
    if (task.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, { text: task, completed: false }]); // Add task as an object
    setTask(""); // Clear input field
  };

  // Handle deleting a task
  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Handle checkbox toggle (strikethrough effect)
  const handleToggle = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Handle enabling edit mode
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index].text);
  };

  // Handle saving edited text
  const handleSaveEdit = () => {
    if (editingText.trim() === "") return;
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex].text = editingText;
    setTasks(updatedTasks);
    setEditingIndex(null);
  };

 

  return (

    <div className="main my-3 ">
     <Navbar/>
    <div className="p-5 max-w-lg mx-auto bg-gray-100 shadow-lg rounded-lg mt-4 ">
      <h2 className="text-xl font-bold mb-3">To-Do List</h2>

      {/* Input Field and Add Button */}
      <div className="flex gap-2">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task..."
          className="border p-2 w-full rounded"
        />
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="mt-4 space-y-2">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-white rounded shadow"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => handleToggle(index)}
                className="cursor-pointer"
              />
              {editingIndex === index ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="border p-1 rounded"
                />
              ) : (
                <span
                  className={`${
                    t.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {t.text}
                </span>
              )}
            </div>
            <div className="flex gap-2">
              {editingIndex === index ? (
                <button
                  onClick={handleSaveEdit}
                  className="bg-green-600 hover:bg-green-900 py-0.5 px-3 rounded-lg text-white"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-600 hover:bg-yellow-900 py-0.5 px-3 rounded-lg text-white"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-600 hover:bg-red-900 py-0.5 px-3 rounded-lg text-white"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
