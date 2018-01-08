// taskListAPIの取得データ


export type TaskListItemType = {
  id: number,
  title: string,
  group_id: number,
  done: boolean
};

export type　TaskListApiType = Array<TaskListItemType>;
