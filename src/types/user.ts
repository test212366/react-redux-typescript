
export interface UserState {
	users: any[]
	loading: boolean
	error: null | string
}
// enum actions for consts
export enum UserActionTypes {
	FETCH_USERS = 'FECTH_USERS',
	FETCH_USERS_SUCCESS = 'FECTH_USERS_SUCCESS',
	FECTH_USERS_ERROR = 'FECTH_USERS_ERROR'
}

// interfaces userActions 
interface FetchUserAction {
	type: UserActionTypes.FETCH_USERS
}
interface FetchUserSuccessAction {
	type: UserActionTypes.FETCH_USERS_SUCCESS
	payload: any[]
}
interface FetchUserErrorAction {
	type: UserActionTypes.FECTH_USERS_ERROR
	payload: string
}
// type - объединяем actons
export type UserActions = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction
