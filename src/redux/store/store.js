import { configureStore } from '@reduxjs/toolkit'
import { initialState } from '../init/initial.state'
import { rootReducer } from '../reducers/rootReducer'

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: true, //composeWithDevtools
})
