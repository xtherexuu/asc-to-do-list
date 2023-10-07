import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./App/features/tasks/tasksSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./App/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    tasks: tasksSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
