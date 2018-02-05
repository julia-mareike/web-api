import React from 'react'
import request from 'superagent'


class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {}
    }
  }
  
  componentDidMount() {
    request
      .get(`/users/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          currentUser: res.body.user
        })
      })
  }

  render () {

    return (
      <div>
      <h1>{this.state.currentUser.name}</h1>
      <h2>Email meee: {this.state.currentUser.email}</h2>
      </div>
    )
  }
}





// props.match.params.id 

export default Profile
