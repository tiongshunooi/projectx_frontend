import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import {setTask} from '../../actions/newJob'

class TaskCardSelectable extends Component {
  render() {
    let task = this.props.task
    let selected = false
    this.props.newJobTask.map(t => {
      if (t.id == task.id ) {
        selected = true
      }
    })
    return (
      <TouchableHighlight onPress={()=>this.props.setTask(task,this.props.newJobTask)}>
        <View>
          {
            selected ? (
              <View>
                <View><Text>{this.props.task.content}</Text></View>
                <View style={styles.selected}></View>
              </View>
            ):(
              <View>
                <View><Text>{this.props.task.content}</Text></View>
                <View style={styles.notSelected}></View>
              </View>
            )
          }
        </View>
      </TouchableHighlight>
    )
  }
}

mapStateToProps = (state) => {
  return {
    newJobTask: state.newJob.task
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => alert('boooooyah'),
    setTask: (task,newJobTask) => dispatch(setTask(task,newJobTask))
  }
}

const styles = {
  selected: {
    backgroundColor:'red',
    width:20,
    height:20,
    borderRadius:50
  },
  notSelected: {
    backgroundColor: 'grey',
    width: 20,
    height: 20,
    borderRadius: 50
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskCardSelectable)
