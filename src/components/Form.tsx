import { ChangeEvent, FormEvent, useState } from 'react';

type FormProps = {
	onAddTask: (taskTitle: string) => void;
};

export default function Form({ onAddTask }: FormProps) {
	const [taskInput, setTaskInput] = useState<string>('');

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		onAddTask(taskInput);
		setTaskInput('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='write your next task'
				value={taskInput}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setTaskInput(e.target.value)
				}
			/>
			<button>+</button>
		</form>
	);
}
