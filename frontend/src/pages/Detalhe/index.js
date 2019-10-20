import React, { Component } from 'react';
import Firebase from '../../Firebase';
import Button from '@material-ui/core/Button';
// import { Container } from './styles';

export default class Detalhe extends Component {
  state = {};

  componentDidMount() {
    let ref = Firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
      console.log(state);
    });
  }

  render() {
    return (
      <Button variant="contained" color="primary">
        detalhe do produto
      </Button>
    );
  }
}
