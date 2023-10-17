import { takeEvery, call, put, select, delay } from "redux-saga/effects";
import { fetchExampleTasks, selectTasksState } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import {
  setTasksListToExampleTasksList,
  setIsExampleTasksLoading,
} from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fethcExampleTasksHandler() {
  try {
    yield put(setIsExampleTasksLoading(true));
    const exampleTasks = yield call(getExampleTasks);
    yield delay(1000);
    yield put(setTasksListToExampleTasksList(exampleTasks));
    yield put(setIsExampleTasksLoading(false));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
    yield put(setIsExampleTasksLoading(false));
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
