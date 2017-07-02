import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMe } from '../../redux/actions/me';

@connect(state => ({
  user: state.user,
}), {
  getMe,
})
class User extends Component {

  componentDidMount() {
    this.props.getMe();
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <h1>Welcome To CINQS</h1>
        <div key={user.get('id')}>
          <h2>{user.get('name')}</h2>
          <h2>{user.get('surname')}</h2>
        </div>
      </div>
    );
  }
}

export default User;