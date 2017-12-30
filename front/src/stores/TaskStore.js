import { observable, action, computed, toJS } from 'mobx';
import type { TaskApiType } from '../types/task';

export default class TaskStore {
  @observable task = {};
  @observable error = null;


  @computed get getTask(): TaskApiType {
    // JSオブジェクトに変換して返す
    return toJS(this.task);
  }

  @action
  clearTask() {
    this.task = {};
  }

  @action
  setTask(TaskData: TaskApiType) {
    this.task = taskData;
  }

  @action
  setError(error: Error) {
    this.error = error;
  }

  @action
  clearError() {
    this.error = null;
  }

}
