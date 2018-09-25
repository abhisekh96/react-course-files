import React, { Component } from 'react'

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA';
const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A';
const result = 10;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;



export default class Youtube extends Component {

  componentDidMount() {
    fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId)
        this.setState({ resultyt: resultyt });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /* clicked() {
    fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId)
        this.setState({ resultyt: resultyt });
      })
      .catch((error) => {
        console.error(error);
      });
  } */

  constructor(props) {
    super(props);
    this.state = {
      resultyt: []
    };
    // this.clicked = this.clicked.bind(this);
  }

  render() {
    // console.log(finalURL);
    // console.log(this.state.resultyt);
    return (
      <div>
        {
          //<button onClick={this.clicked}>Get YouTube Videos</button>
        }
        {
          this.state.resultyt.map((link, i) => {
            var frame = <div key={i} className="youtube"><iframe width="560" height="315" src={link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Introduction to Flutter and FAQ"></iframe></div>
            return frame;
          })
        }
      </div>
    )
  }
}
