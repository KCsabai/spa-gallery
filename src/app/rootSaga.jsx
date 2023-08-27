import { all, call, put, fork, take, select } from "redux-saga/effects";
import { successAction, failedAction, pendingAction } from "../common/functions";

const fetchRequest = ({url, method, data, auth}) => {
  return  fetch(`${process.env.REACT_APP_BASE_API_URL}${url}`, {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.tokens?.accessToken}`,
    }
  }).then((response) => response.json());
}

const fetchPending = (data) => ({
  type: pendingAction(data.type),
})

const fetchSuccess = (data) => ({
  type: successAction(data.type),
  data: data.data,
});
  
const fetchFailure = (data) => ({
  type: failedAction(data.type),
  data: data,
});
  
const getAuth = (state) => state.auth

function* fetchSaga(action) {
  yield put(fetchPending(action));
  try {
    const auth = yield select(getAuth);
    const response = yield call(fetchRequest, { 
      ...action,
      auth,
    });

    if (response.statusCode && response.statusCode >= 400) {
      return yield put(
        fetchFailure({
          error: response.message,
          type: action.type,
        })
      );
    }

    yield put(
      fetchSuccess({
          data: response,
          type: action.type,
      })
    );
  } catch (e) {
    yield put(
      fetchFailure({
        error: e.message,
        type: action.type,
      })
    );
  }
}

export const takeEveryRegex = (pattern, saga, ...args) =>
  fork(function* () {
    while (true) {
      const action = yield take("*");
      if (pattern.test(action.type)) {
        yield fork(saga, ...args.concat(action))
      }
    }
  });

function* rootSaga() {
  // the api call needs to be begin with 'FETCH_' string and end without succesAction, failedAction, pendingAction string
  const regexString = `^(?!(FETCH_[A-Z_]+(${successAction('')}|${failedAction('')}|${pendingAction('')})))FETCH_[A-Z_]+$`
  yield all([takeEveryRegex(new RegExp(regexString), fetchSaga)]);
};

export default rootSaga;

