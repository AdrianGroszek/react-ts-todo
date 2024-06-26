import TaskItem from './TaskItem';
import { type Task as ITask } from '../App.tsx';

type TasksListProps = {
	tasks: ITask[];
	onDeleteTask: (id: number) => void;
	onIsDone: (id: number) => void;
};

export default function TasksList({
	tasks,
	onDeleteTask,
	onIsDone,
}: TasksListProps) {
	return (
		<ul>
			{tasks.map((task) => (
				<TaskItem
					taskText={task.taskTitle}
					taskID={task.id}
					taskIsDone={task.isDone}
					key={task.id}
					onDeleteTask={onDeleteTask}
					onIsDone={onIsDone}
				/>
			))}
		</ul>
	);
}
