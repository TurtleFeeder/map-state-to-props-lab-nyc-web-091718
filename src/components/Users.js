import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    console.log('in Users',this.props.users)
    return (
      <div>
        <ul>
          {`${this.props.users.length} Users!`}
          {this.props.users.map(u=> <li key={u.username}>{u.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state) {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
