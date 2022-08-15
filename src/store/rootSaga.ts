import { all, fork } from 'redux-saga/effects'

import productDataSaga from './productData/sagas'

export function* rootSaga() {
    yield all([fork(productDataSaga)])
}
