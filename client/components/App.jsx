import React from 'react'
import UsersList from './UsersList'
import Profile from './Profile'
import request from 'superagent'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    request
      .get('/users')
      .then(res => {
        this.setState({
          users: res.body.users
        })
      })
  }

  
  render() {

    return (
      <Router>
        <div>
          <h1>Hello!</h1>
          <Route exact path='/' render={() => <UsersList users={this.state.users} />} />
          <Route path='/:id' component={Profile} />

        </div>

      </Router>
    )
  }
}

export default App