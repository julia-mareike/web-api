import React from 'react'
import { Route, Link } from 'react-router-dom'
import request from 'superagent'
// import db from '../../db'

class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newName: '',
      newEmail: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit() {
    // db.addUser({name: this.state.newName, email: this.state.newEmail})
    request
      .post('/users')
      .send({user: {name: this.state.newName, email: this.state.newEmail} })
      .then(res => {
        this.setState({newName: '', newEmail: ''})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <form>
          <input name='newName' placeholder='whats yo name' onChange={this.handleChange} value={this.state.newName} />
          <input name='newEmail' placeholder='whats yo email' onChange={this.handleChange} value={this.state.newEmail} />
          <button type='button' onClick={this.handleSubmit}>Whos dat?</button>
        </form>
        <ul>
          {this.props.users.map(user => {
            return <li key={user.id}><Link to={`/${user.id}`}>{user.name}</Link></li>
          })}
        </ul>
      </div>
    )
  }
}

export default UsersList