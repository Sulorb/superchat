import React, { Component } from 'react';
import logo from '../../images/tete.png';
import './App.css';
import Form from '../Form/Form.js';
import firebase from 'firebase';
import firebaseConfig from '../../config';
import Nav from '../Nav/Nav';

firebase.initializeApp(firebaseConfig);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  componentDidMount() {

    if(firebase.auth().currentUser) {
      this.setState({ user: firebase.auth().currentUser });
    } 

      firebase.auth().onAuthStateChanged(user => {
        console.log(user)
        this.setState({ user: user });
      });
  }

  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  handleLogOut() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h2>
            Chat trop cool
          </h2>
          <p>Super design à la clé !</p>
          <Nav />
          {!this.state.user ? (
            <button
              className="app__button"
              onClick={this.handleSignIn.bind(this)}
            >
              Connexion
            </button>
          ) : (
              <button
                className="app__button"
                onClick={this.handleLogOut.bind(this)}
              >
                Déconnexion
            </button>
            )}
        </div>


        {this.state.user ?
          <div className="app__list">
            <Form user={this.state.user} />
          </div>
          :
          'Le petit bouton connexion permet de vous connecter afin d\'accéder aux messages "'}



      </div>
    );
  }
}
export default App;