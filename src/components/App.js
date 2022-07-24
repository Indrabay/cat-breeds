import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';
import MainList from './MainList';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      breeds: [],
      isLoading: true
    }
  }

  componentDidMount() {
    axios
      .get('https://api.thecatapi.com/v1/breeds?limit=9&page=0')
      .then((res) => {
        const breeds = res.data;
        const isLoading = false;
        this.setState({ breeds, isLoading });
      })
  }
  render() {
    const { breeds, isLoading } = this.state;
    if (isLoading) {
      return (
        <div className='loading'>
          <h1>Data is still loading...</h1>
        </div>
      )
    }
    return (
      <div className="App">
        <Header />
        <MainList breeds={breeds} />
        <Footer />
      </div>
    )
  }
}
