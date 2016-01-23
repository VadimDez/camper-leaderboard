/**
 * Created by vadimdez on 23/01/16.
 */
import React from 'react';
import LazyLoad from 'react-lazy-load';

class User extends React.Component {
  render() {
    return (
      <div>
        <div>
          <LazyLoad><img src={this.props.data.img} width="30" /></LazyLoad>
        </div>
        <div>{this.props.data.username}</div>
        <div>{this.props.data.recent}</div>
        <div>{this.props.data.alltime}</div>
      </div>
    )
  }
}

export default User;