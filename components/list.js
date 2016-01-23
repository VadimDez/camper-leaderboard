/**
 * Created by vadimdez on 23/01/16.
 */
import React from 'react';
import User from './user';


class List extends React.Component {

  constructor() {
    super();

    this.state = {
      users: [],
      recent: false
    }
  }

  componentDidMount() {
    this.getTopLast30Days();
  }

  /**
   * Get top 100 users from last 30 days
   */
  getTopLast30Days() {
    let url = 'http://fcctop100.herokuapp.com/api/fccusers/top/recent';
    $.get(url, function (data) {
      this.setState({
        users: data,
        recent: true
      });
    }.bind(this));
  }

  /**
   * Get top 100 users from overall top
   */
  getOverallTop() {
    let url = 'http://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    $.get(url, function (data) {
      this.setState({
        users: data,
        recent: false
      });
    }.bind(this));
  }

  render() {
    var users = [];

    this.state.users.map(function (user) {
      users.push(<User key={user.username} data={user} />);
    });

    return (
      <table className="list table table-responsive">
        <thead>
          <tr>
            <th>
            </th>
            <th className="col-xs-1 text-center">
              <button className="btn btn-default btn-sm" onClick={this.getTopLast30Days.bind(this)}>Recent {this.state.recent ? <i className="glyphicon glyphicon-circle-arrow-down"></i> : '' }</button>
            </th>
            <th className="col-xs-1 text-center">
              <button className="btn btn-default btn-sm" onClick={this.getOverallTop.bind(this)}>Overall {!this.state.recent ? <i className="glyphicon glyphicon-circle-arrow-down"></i> : '' }</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {users}
        </tbody>
      </table>
    )
  }
}

export default List;