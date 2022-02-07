import { combineReducers, createStore } from "redux";

//import reducers
    // import AuthReducer from "../reducers/AuthReducer";
    // import ContentReducer from "../reducers/ContentReducer";

const rootReducer = combineReducers({
    //   auth: AuthReducer,
    //   content: ContentReducer,
});

const store = createStore(rootReducer);

export default store;

export type ReducerType = ReturnType<typeof rootReducer>;
