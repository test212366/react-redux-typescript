import { UserActions, UserActionTypes, UserState } from "../../types/user"

const initialState: UserState = {
	users: [],
	loading: false,
	error: null
}


export const userReducer = (state: UserState = initialState, action: UserActions): UserState => {
	switch (action.type) {
		case UserActionTypes.FETCH_USERS:
			return { loading: true, error: null, users: [] }

		case UserActionTypes.FETCH_USERS_SUCCESS:
			return { loading: false, error: null, users: action.payload }

		case UserActionTypes.FECTH_USERS_ERROR:
			return { loading: false, error: action.payload, users: [] }
		default:
			return state

	}
}