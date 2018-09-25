import React, { Component } from 'react';
import Profile from "./Components/Profile";
import Search from "./Components/Search";

const API = "https://api.github.com/users";

export default class Github extends Component {

  getProfile(username) {
    let finalURL = `${API}/${username}`;

    fetch(finalURL)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeURL: data.html_url,
          notFound: data.message,
          location: data.location
        })
      })
      .catch(error => console.log("There was a problem in fetching data."));
  }

  componentDidMount() {
    this.getProfile(this.state.username);
    console.log(this.state.notFound);
  }

  constructor(props) {
    super(props);
    this.state = {
      username: 'abhisekh96',
      name: '',
      avatar: '',
      repos: '',
      followers: '',
      following: '',
      homeURL: '',
      notFound: '',
      location: ''

    };
    this.getProfile = this.getProfile.bind(this);
  }

  render() {
    return (
      <div>
        <section id="card">
          <Search searchProfile={this.getProfile} />
          <Profile userData={this.state} />
        </section>
      </div>
    )
  }
}
