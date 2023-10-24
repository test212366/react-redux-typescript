import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
	user: userReducer,
	todo: todoReducer,
})

// это чтобы можно было брать только определенное состояние у всего стейта в useSelector(state => state.SOMETHING)
export type RootState = ReturnType<typeof rootReducer>