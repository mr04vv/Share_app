import * as React from 'react';
import type { NavigationScreenProp } from 'react-navigation/src/TypeDefinition';
import type { VideoListItemType } from '../../types/taskList';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
// const styles = StyleSheet.create({
//   itemImage: {
//     margin: 0,
//     padding: 0,
//     height: 150,
//     width: '100%',
//   },
//   itemView: {
//     paddingHorizontal: 4,
//     paddingVertical: 8,
//   },
// });
//
type PropsType = {
  data: TaskListItemType,
  navigation: NavigationScreenProp<*>,
  rows: number
};

// 動画カードアイテムのコンポーネント
const VideoListItem = (props: PropsType): React.Element<*> => {
  const { data } = props;

  const {
    taskId,
    title,
  } = data;
  const group_id = data.group_id;
  const done = data.done;
  // const picture = data.channelImage;
  //
  // // リストの列
  // const rows = (props.rows) ? props.rows : 2;
  //
  // // アイテムの横幅
  // const itemWidth = (Dimensions.get('window').width) / rows;

  // navigate
  const { navigate } = props.navigation;

  return (
    // <View style={{ width: itemWidth }}>
    //   <Card>
    //     <TouchableOpacity onPress={(): boolean => navigate('VideoScreen', {
    //       videoId, // 動画id
    //     })}
    //     >
    //       <Image source={{ uri: thumbnail }} style={styles.itemImage} />
    //     </TouchableOpacity>
    //     <View style={styles.itemView}>
    //       <Text>{title}</Text>
    //       <Grid style={{ paddingVertical: 10 }}>
    //         <Col style={{ width: 50 }}><Thumbnail small source={{ uri: picture }} /></Col>
    //         <Col><Text note>{name}</Text></Col>
    //       </Grid>
    //       <Text>{createdAt}</Text>
    //     </View>
    //   </Card>
    // </View>
      <MuiThemeProvider>
        <Card style={{margin: 30}}>
          <CardHeader title={<Title place={this.state.placeName} />} />
          <CardText style={{position: 'relative'}}>
            <RefreshIndicator status={this.state.loading ? 'loading' : 'hide'} top={40} left={100} loadingColor="#f00" />
            <WeaterInfomation weather={this.state.weather} temperature={this.state.temperature} />
          </CardText>
          <CardActions>
            <PlaceSelector places={this.Places} actionSelect={(ix) => this.selectPlace(ix)} />
          </CardActions>
        </Card>
      </MuiThemeProvider>
    )
  );
};

export default VideoListItem;
