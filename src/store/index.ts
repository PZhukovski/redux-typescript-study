import { configureStore } from '@reduxjs/toolkit';
import {userReducer} from '../reducer.ts/userReducer';
import {todoReducer} from '../reducer.ts/todoReducers'

const stringMiddleware =() => (next: (arg0: { type: string; }) => any) => (action: any) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

export const store = configureStore({
    reducer: { userReducer, todoReducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})
export type RootState = ReturnType<typeof store.getState>