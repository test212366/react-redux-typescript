import axios from "axios"
import { Dispatch } from "redux"
import { UserActions, UserActionTypes } from "../../types/user"

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserActions>) => {
		try {
			dispatch({ type: UserActionTypes.FETCH_USERS })
			const resonce = await axios.get('https://jsonplaceholder.typicode.com/users')
			dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: resonce.data })
		} catch (e) {
			dispatch({ type: UserActionTypes.FECTH_USERS_ERROR, payload: `${e}` })
		}
	}
}