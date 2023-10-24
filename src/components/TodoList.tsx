import { FC, useEffect } from "react";
import { useActions } from "../hooks/useAction";
import { useTypeSelector } from "../hooks/useTypeSelector";

const TodoList: FC = () => {
	const { loading, page, todos, error, limit } = useTypeSelector(state => state.todo)
	const pages: any[] = [1, 2, 3, 4, 5]
	const { fetchTodos, setTodoPage } = useActions()

	useEffect(() => {
		fetchTodos(page, limit)
	}, [page])

	if (loading) {
		return <h2>loading users</h2>
	}
	if (error) {
		return <h2>loading errror users</h2>
	}
	return (
		<>
			{todos.map(todo => (
				<div key={todo.id}> {todo.title}</div>
			))}
			{pages.map(p => (
				<div onClick={() => setTodoPage(p)}>
					{p}
				</div>
			))}
		</>
	)
}

export default TodoList