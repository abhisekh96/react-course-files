import React, { Component } from 'react';

class Profile extends Component {

  render() {

    let userdata = this.props.userData;
    let followers = `${userdata.homeURL}/followers`;
    let following = `${userdata.homeURL}/following`;
    let repos = `${userdata.homeURL}/repositories`;

    if (userdata.notFound === 'Not Found') {
      return (
        <div className="notfound">
          <h2>User not found. Type the username carefully.</h2>
        </div>
      );
    } else {
      return (
        <section className="github-profile">
          <div className="github-profile-info">
            <a href={userdata.homeURL} target="_blank" title={userdata.name || userdata.username}><img src={userdata.avatar} alt="Avatar" /></a>
            <h2><a href={userdata.homeURL} title={userdata.username} target="_blank">{userdata.name || userdata.username}</a></h2>
            <h3>{userdata.location}</h3>
          </div>
          <div className="github-profile-state">
            <ul>
              <li>
                <a href={followers} target="_blank" title="No of Followers"><i>{userdata.followers}</i><span>Followers</span></a>
              </li>
              <li>
                <a href={repos} target="_blank" title="No of Repositories"><i>{userdata.repos}</i><span>Repositories</span></a>
              </li>
              <li>
                <a href={following} target="_blank" title="No of Following"><i>{userdata.following}</i><span>Following</span></a>
              </li>
            </ul>
          </div>
        </section>
      );
    }
  }
}

export default Profile;