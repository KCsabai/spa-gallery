import { all, call, put, takeLatest } from "redux-saga/effects";

const fetchRequest = ({url, method, data}) =>
  fetch(`${process.env.REACT_APP_BASE_API_URL}${url}`, {
    method,
    body: data,
  });


const fetchSuccess = (data) => ({
   type: data.type,
   data
});
  
const fetchFailure = (data) => ({
    type: data.FETCH_POST_FAILURE,
    data
});
  
function* fetchSaga(action) {
    console.log('action', action)
  try {
    const response = yield call(fetchRequest, action);
    yield put(
        fetchSuccess({
            posts: response.data,
            type: `${action.type}_SUCCESS`,
        })
    );
  } catch (e) {
    yield put(
      fetchFailure({
        error: e.message,
        type: `${action.type}_FAILD`,
      })
    );
  }
}

function* rootSaga() {
  yield all([takeLatest('*_REQUEST', fetchSaga)]);
}

export default rootSaga;

