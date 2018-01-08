// @flow
import * as React from 'react';
import type { NavigationScreenProp } from 'react-navigation/src/TypeDefinition';
import VideoListView from './TaskListView';
import VideoListStore from '../../stores/TaskListStore';
import VideoListAction from '../../actions/TaskListAction';

type PropsType = {
  navigation: NavigationScreenProp<*>,
  store: TaskListStore
};

type StateType = {
  acton: any
};

class TaskListViewComponent extends React.Component<PropsType, StateType> {
  componentWillMount() {
    this.action = new TaskListAction(this.props.store);
  }

  action: any;

  render(): React.Node {
    return (
      <TaskListView
        navigation={this.props.navigation}
        store={this.props.store}
        action={this.action}
      />
    );
  }
}

export default TaskListViewComponent;
