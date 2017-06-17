import React, { Component } from 'react';
import './App.min.css';

const marked = require('marked');
marked.setOptions({
  gfm: true,
  sanitize: true,
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      markdownValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  markItDown(props) {
    return {__html: marked(props)};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1 className="text-center">Markdown Previewer</h1>
        <div className="container">
          <div className="mdInput">
            <h2>Write your markdown below</h2>
            <textarea cols="40" rows="20"
              value={this.state.value}
              onChange={this.handleChange} />
          </div>
          <div className="mdOutput">
            <h2>Preview</h2>
            <span dangerouslySetInnerHTML={this.markItDown(this.state.value)} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
