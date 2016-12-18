import React, { Component } from 'react'
import { connect } from 'cerebral/react'
import './UserBubble.css'

export default connect({
  user: 'user',
}, class UserBubble extends Component {
  render() {
    const p = this.props

    return (
      <div className="UserBubble-container">
        <span className="UserBubble-name">{p.user && p.user.name}</span>
        <img src={p.user && p.user.photoUrl} alt="User" className="UserBubble-image" />
      </div>
    )
  }
})
