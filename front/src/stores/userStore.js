import {createStore,  applyMiddleware} from 'redux';//reduxの機能
import Reducer from '../reducers/index';　//ファイル追加②
import {createLogger} from 'redux-logger';//ログを出力したいので入れてます

export default function configureStore() {
    const logger = createLogger({logger:console});
    const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
    return createStoreWithMiddleware(Reducer);
}