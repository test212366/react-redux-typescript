import { FC, useEffect } from "react";
import { useActions } from "../hooks/useAction";
import { useTypeSelector } from "../hooks/useTypeSelector";


const UserList: FC = () => {
	const { users, error, loading } = useTypeSelector(state => state.user)
	const { fetchUsers } = useActions()

	useEffect(() => {
		fetchUsers()
	}, [])

	if (loading) {
		return <h2>loading users</h2>
	}
	if (error) {
		return <h2>loading errror users</h2>
	}
	console.log(users)
	return (
		<>
			{users.map(user => (
				<div key={user.id}>{user.name}</div>
			))}
		</>
	)
}
export default UserList