/**
 * Created by vadimdez on 23/01/16.
 */
import React from 'react';
import LazyLoad from 'react-lazy-load';

class User extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <LazyLoad height={30} width={40}><img src={this.props.data.img} width="30" className="img-circle"/></LazyLoad> <span className="username">{this.props.data.username}</span>
        </td>
        <td className="col-xs-1 text-center">{this.props.data.recent}</td>
        <td className="col-xs-1 text-center">{this.props.data.alltime}</td>
      </tr>
    )
  }
}

export default User;