type TaskProps = {
	taskText: string;
	taskID: number;
	taskIsDone: boolean;
	onDeleteTask: (id: number) => void;
	onIsDone: (id: number) => void;
};

export default function TaskItem({
	taskText,
	taskID,
	onDeleteTask,
	onIsDone,
	taskIsDone,
}: TaskProps) {
	return (
		<li>
			<label
				className='li-task-desc'
				style={{ textDecoration: taskIsDone ? 'line-through' : 'none' }}>
				<input
					type='checkbox'
					onChange={() => onIsDone(taskID)}
					checked={taskIsDone}
				/>
				<p>{taskText}</p>
			</label>
			<button onClick={() => onDeleteTask(taskID)}>-</button>
		</li>
	);
}
