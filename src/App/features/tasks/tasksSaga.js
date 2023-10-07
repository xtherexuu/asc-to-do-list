import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExampleTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { setTasksListToExampleTasksList } from "./tasksSlice";

function* fethcExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasksListToExampleTasksList(exampleTasks));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!")
  }
}

export function* watchFetchExampleTasks() {
  yield takeEvery(fetchExampleTasks.type, fethcExampleTasksHandler);
}