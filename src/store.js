import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./App/features/tasks/tasksSlice";

export default configureStore({
    reducer: {
        tasks: tasksSlice,
    },
});