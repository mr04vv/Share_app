import { observable, computed, action } from 'mobx';
import { ListView } from 'react-native';
import type { ListViewDataSource } from 'react-native/Libraries/Lists/ListView/ListViewDataSource';
import type { VideoListItemType } from '../types/taskList';

export default class TaskListStore {
  // categoryName: string;
  // categoryId: number;
  // constructor(categoryName: string, categoryId: number) {
  //   this.categoryName = categoryName;
  //   this.categoryId = categoryId;
  // }

  @observable.ref taskList = []; // 参照が変わった時だけ通知(Viewがrenderされる)
  // @observable listRow = 2;
  @observable error = null; // error用

  ds = new ListView.DataSource({ rowHasChanged: (r1: any, r2: any): boolean => r1 !== r2 });

  @computed get dataSource(): ListViewDataSource {
    return this.ds.cloneWithRows(this.taskList.slice());
  }

  @action
  clearList() {
    // this.taskList.clear();
    this.taskList = [];
  }

  @action
  setList(dataArray: Array<TaskListItemType>) {
    this.taskList = dataArray;
  }

  @action
  addItem(newDataArray: Array<TaskListItemType>) {
    // taskListはobservable型なのでconcatなどを使うときはslice()でArrayに戻す必要がある
    const temp = this.taskList.slice().concat(newDataArray);
    this.taskList = temp;
  }

  @action
  setError(error: Error) {
    console.log(error);
    this.error = error;
  }

  @action
  clearError() {
    this.error = null;
  }
}
