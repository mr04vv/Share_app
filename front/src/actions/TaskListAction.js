// @flow
import TaskListStore from '../stores/TaskListStore';

export default class TaskListActions {
  constructor(store: TaskListStore) {
    this.store = store;
  }
  store: any;

  fetchList() {
    // fetch('http://sportsapp-2137920236.ap-northeast-1.elb.amazonaws.com/v1/video/list?limit=5&offset=1', {
    // fetch(`http://localhost:1323/v1/video/list?limit=10&offset=0`,{
    // fetch(`http://192.168.0.15:1323/v1/video/list?limit=10&offset=0`,{
    fetch(`http://42.146.33.29/v1/video/list?limit=10&offset=0`,{
      // mode: 'cors',
      headers: {
        // token: '7eb9b754-2b9d-41bd-95a2-69e5dfd7a736',
        // 'Content-Type': 'application/json',
        // Accept: 'application/json',
      },
    })
      .then((response: any) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.statusText);
      })
      .then((payload: Object) => {
        // storeにタスクリストを保存
        this.store.setList(payload);
        // errorをクリアする
        this.store.clearError();
      })
      .catch((error: Error) => {
        // error状況をstoreに保存
        this.store.setError(error);
      });
  }
}