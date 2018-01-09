import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import WeatherIcon from 'material-ui/svg-icons/image/wb-sunny'
// import TemperatureIcon from 'material-ui/svg-icons/editor/show-chart'

class TaskListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {id: null, title: null, group_id: null, done: false, loading: false}
    this.Ids=[{name: 'いち', id:1},{name: 'に', id: 2},{name: 'さん', id: 3}]


  }
  selectList(index) {
    if (index > 0) {
      const id = this.Ids[index - 1]
      this.setState({id: id.id, title: null, group_id: null, done: false ,loading: true})
      this.getTask(id.id)
    }
  }
  getTask(id) {
    const delay = (mSec) => new Promise((resolve) => setTimeout(resolve, mSec))

    // fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${this.OpenWeatherMapKey}&id=${
    //       id}&lang=ja&units=metric`)
    fetch(`http://localhost:4567/tasks/${id}`,{
      mode: 'cors',
      headers: {
      Accept: 'application/json',
    },
    })
    .then((response) => response.json())
    .then((json) => {
      delay(700)
      .then(() => this.setState({title: json.title,
                                 done: json.done, loading: false}))
    })
    .catch((response) => {
      this.setState({loading: false})
      console.log('** error **', response)
    })
  }
  render() {
    return (
      <MuiThemeProvider>
        <Card style={{margin: 30}}>
          <CardHeader title={<Title title={this.state.title} />} />
          <CardText style={{position: 'relative'}}>
            <RefreshIndicator status={this.state.loading ? 'loading' : 'hide'} top={40} left={100} loadingColor="#f00" />
            <WeaterInfomation weather={this.state.done} />
          </CardText>
          <CardActions>
          <PlaceSelector places={this.Ids} actionSelect={(ix) => this.selectList(ix)} />
          </CardActions>
        </Card>
      </MuiThemeProvider>
    )
  }
}


const Title = (props) => (
  <h1>{props.title}</h1>
)
Title.propTypes = {
  title: PropTypes.string
}

const WeaterInfomation = (props) => (
  <List>
    <ListItem leftIcon={<WeatherIcon/>} primaryText={props.weather} />
  </List>
)
// WeaterInfomation.propTypes = {
//   weather: PropTypes.boolean
// }

const PlaceSelector = (props) => (
  <DropDownMenu value={-1} onChange={(event, index) => props.actionSelect(index)}>
    <MenuItem value={-1} primaryText="場所を選択" />
    {props.places.map((place, ix) => <MenuItem key={ix} value={ix} primaryText={place.name} />)}
  </DropDownMenu>
)
PlaceSelector.propTypes = {
  places: PropTypes.array,
  actionSelect: PropTypes.func
}

ReactDOM.render(
  <TaskListPage />,
  document.getElementById('root')
)
