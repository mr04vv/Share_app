import * as React from 'react';
// import {
//   StyleSheet,
//   ListView,
// } from 'react-native';
import { observer } from 'mobx-react';
import type { NavigationScreenProp } from 'react-navigation/src/TypeDefinition';
import VideoListItem from './TaskListItem';
import FetchErrorButton from '../../components/FetchErrorButton';
import type { VideoListItemType } from '../../types/taskList';
import VideoListStore from '../../stores/TaskListStore';
import VideoListAction from '../../actions/TaskListAction';

// style
// const styles = StyleSheet.create({
//   listView: {
//     flex: 1,
//   },
//   listViewContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
// });

type PropsType = {
  navigation: NavigationScreenProp<*>,
  store: TaskListStore,
  action: TaskListAction
};

@observer
class TaskListView extends React.Component<PropsType> {
  componentWillMount() {
    this.props.action.fetchList();
  }

  handleFetchError = () => {
    this.props.action.fetchList();
  }

  // ListView のアイテムをレンダリングする
  renderRow = (data: TaskListItemType) => (
    <VideoListItem
      data={data}
      navigation={this.props.navigation}
    />
  );

  render() {
    // errorの表示(とりあえず)
    if (this.props.store.error) {
      return <FetchErrorButton action={this.handleFetchError} />;
    }

    return (
      <ListView
        style={styles.listView}
        contentContainerStyle={styles.listViewContainer}
        dataSource={this.props.store.dataSource}
        renderRow={this.renderRow}
        enableEmptySections // ListItemが空を許す!
        removeClippedSubviews={false} // listViewのレンダリングを行う(これがないとiosではレンダリングが遅れる)
      />
    );
  }
}

export default TaskListView;
