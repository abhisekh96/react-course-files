import React, { Component } from "react";
var firebase = require("firebase");
// var uuid = require("uuid");
const uuid = require("uuid/v1");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCWBjJCJwQRc-FzZwXu6RSnUWfOGZVnMCM",
  authDomain: "usurvey-c83ac.firebaseapp.com",
  databaseURL: "https://usurvey-c83ac.firebaseio.com",
  projectId: "usurvey-c83ac",
  storageBucket: "usurvey-c83ac.appspot.com",
  messagingSenderId: "428138891431"
};
firebase.initializeApp(config);

class Usurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // uid: uuid.v1,
      uid: uuid(),
      studentName: "",
      answers: {
        answer1: "",
        answer2: "",
        answer3: ""
      },
      isSubmitted: false
    };
    this.nameSubmit = this.nameSubmit.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
  }

  nameSubmit(event) {
    var studentName = this.refs.name.value;
    this.setState({ studentName: studentName }, () => console.log(this.state));
  }

  answerSelected(event) {
    var answers = this.state.answers;
    if (event.target.name === "answer1") {
      answers.answer1 = event.target.value;
    } else if (event.target.name === "answer2") {
      answers.answer2 = event.target.value;
    } else if (event.target.name === "answer3") {
      answers.answer3 = event.target.value;
    }

    this.setState({ answers: answers }, () => console.log(this.state));
  }

  questionSubmit() {
    firebase
      .database()
      .ref("uSurvey/" + this.state.uid)
      .set({
        studentName: this.state.studentName,
        answers: this.state.answers
      });
    this.setState({ isSubmitted: true });
  }

  render() {
    var studentName;
    var questions;

    if (this.state.studentName === "" && this.state.isSubmitted === false) {
      studentName = (
        <div>
          <h2>Hey, please let us know your name!</h2>
          <form onSubmit={this.nameSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Enter your name"
              ref="name"
            />
          </form>
        </div>
      );
      questions = "";
    } else if (
      this.state.studentName !== "" &&
      this.state.isSubmitted === false
    ) {
      studentName = (
        <p className="welcome">Welcome to U-Survey, {this.state.studentName}</p>
      );
      questions = (
        <div>
          <p className="welcome">Here are some questions</p>
          <form onSubmit={this.questionSubmit}>
            <div className="card">
              <label>What kind of courses do you like the most?</label>
              <br />
              <input
                type="radio"
                name="answer1"
                value="Technology"
                onChange={this.answerSelected}
              />
              Technology
              <input
                type="radio"
                name="answer1"
                value="Design"
                onChange={this.answerSelected}
              />
              Design
              <input
                type="radio"
                name="answer1"
                value="Marketing"
                onChange={this.answerSelected}
              />
              Marketing
            </div>
            <div className="card">
              <label>Are you ?</label>
              <br />
              <input
                type="radio"
                name="answer2"
                value="Student"
                onChange={this.answerSelected}
              />
              Student
              <input
                type="radio"
                name="answer2"
                value="In job"
                onChange={this.answerSelected}
              />
              In job
              <input
                type="radio"
                name="answer2"
                value="Looking for jobs"
                onChange={this.answerSelected}
              />
              Looking for jobs
            </div>
            <div className="card">
              <label>Is E-Learning helpful?</label>
              <br />
              <input
                type="radio"
                name="answer3"
                value="Yes"
                onChange={this.answerSelected}
              />
              Yes
              <input
                type="radio"
                name="answer3"
                value="No"
                onChange={this.answerSelected}
              />
              No
              <input
                type="radio"
                name="answer3"
                value="May be"
                onChange={this.answerSelected}
              />
              May be
            </div>
            <input className="feedback-button" type="submit" value="Submit" />
          </form>
        </div>
      );
    } else if (
      this.state.isSubmitted === true &&
      this.state.studentName !== ""
    ) {
      studentName = (
        <div>
          <h2>Thanks, {this.state.studentName}</h2>
        </div>
      );
    }

    return (
      <div>
        <h1>{studentName}</h1>
        <h1>{questions}</h1>
      </div>
    );
  }
}

export default Usurvey;
