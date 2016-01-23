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
      month: false
    }
  }

  changeTop() {
    if (this.state.month) {
      this.getOverallTop();
    } else {
      this.getTopLast30Days();
    }
  }

  componentDidMount() {
    this.getTopLast30Days();
  }

  /**
   * Get json from url
   * @param url
   * @param success
   * @param error
   */
  getJSON(url, success, error) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {

        var data = JSON.parse(this.response);
        if (typeof success === 'function') {
          success(data);
        }
      } else {
        if (typeof error === 'function') {
          error()
        }
      }
    };

    request.onerror = function() {
      if (typeof error === 'function') {
        error()
      }
    };

    request.send();
  }

  getTopLast30Days() {
    let url = 'http://fcctop100.herokuapp.com/api/fccusers/top/recent';
    this.getJSON(url, function (data) {
      this.setState({
        users: data,
        month: true
      });
    }.bind(this));
  }

  getOverallTop() {
    let url = 'http://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    this.getJSON(url, function (data) {
      this.setState({
        users: data,
        month: false
      });
    }.bind(this));
  }

  render() {
    var users = [];

    this.state.users.map(function (user) {
      users.push(<User key={user.username} data={user} />);
    });

    return (
      <div className="list">
        <header>
          <button onClick={this.changeTop.bind(this)}>Cahnge top</button>
        </header>
        {users}
      </div>
    )
  }
}

export default List;