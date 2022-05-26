

export interface UserState {
    users: any[],
    loading: boolean,
    error: null | string

}
export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}
interface fetchUsersAction {
    type: UserActionTypes.FETCH_USERS,

}
interface fetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: any[]

}
interface fetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string

}
export type UserAction = fetchUsersAction | fetchUsersErrorAction | fetchUsersSuccessAction;