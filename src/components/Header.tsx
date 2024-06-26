interface tasksProps {
	tasksLength: number;
	doneTasksCount: number;
}

export default function Header({ tasksLength, doneTasksCount }: tasksProps) {
	return (
		<header>
			<div>
				<h3>Todo Done</h3>
				<p>Keep it up</p>
			</div>
			<div className='circle'>
				<span>{doneTasksCount}</span>/<span>{tasksLength}</span>
			</div>
		</header>
	);
}
