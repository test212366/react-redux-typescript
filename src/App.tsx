import { FC } from "react";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

const App: FC = () => {
	return (
		<>
			<UserList />
			<TodoList />
		</>
	)
}

export default App;
