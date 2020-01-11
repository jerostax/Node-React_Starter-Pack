import React from 'react';
import axios from 'axios';

import './app.css';

class App extends React.Component {
  state = { content: '' };

  getSample = async () => {
    try {
      const response = await axios.get('/sample/helloworld');
      console.log(response.data.message);
      this.setState({ content: response.data.content });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    let { content } = this.state;
    return (
      <div>
        <h1>Welcome to my React App</h1>
        <button type='button' onClick={this.getSample}>
          Get Sample from Server
        </button>
        {content ? <p>{content}</p> : ''}
      </div>
    );
  }
}

export default App;
