import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TasksList from './components/TasksList';

export type Task = {
	taskTitle: string;
	isDone: boolean;
	id: number;
};

function App() {
	const [tasks, setTasks] = useState<Task[]>([
		{ taskTitle: 'Task test!', isDone: false, id: 1 },
		{ taskTitle: 'Task test222!', isDone: true, id: 2 },
	]);

	const isDoneCount = tasks.reduce(
		(count: number, task: Task) => (task.isDone ? count + 1 : count),
		0
	);

	function handleAddTask(taskTitle: string) {
		const newTask: Task = {
			taskTitle,
			isDone: false,
			id: Math.random(),
		};
		setTasks((prevTasks) => [...prevTasks, newTask]);
	}

	function handleDeleteTask(id: number) {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	}

	function handleIsDone(id: number) {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, isDone: !task.isDone } : task
			)
		);
	}

	return (
		<>
			<Navigation />
			<main>
				<Header tasksLength={tasks.length} doneTasksCount={isDoneCount} />
				<Form onAddTask={handleAddTask} />
				<TasksList
					tasks={tasks}
					onDeleteTask={handleDeleteTask}
					onIsDone={handleIsDone}
				/>
			</main>
		</>
	);
}

export default App;
