import { takeEvery, call, put, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasksState } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { setTasksListToExampleTasksList } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fethcExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasksListToExampleTasksList(exampleTasks));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
  }
}

function* saveInLocalStorageHandler() {
  const { tasks } = yield select(selectTasksState);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeEvery(fetchExampleTasks.type, fethcExampleTasksHandler);
  yield takeEvery("*", saveInLocalStorageHandler);
}
