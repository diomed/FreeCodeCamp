import Markdown from 'markdown-to-jsx';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const marked = require('marked');

function MarkItDown(props) {
  return marked(props);
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      markdownValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({markdownValue: marked(event.target.value)});
  }

  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>
        <div className="toMarkDown">
          <h2>Type stuff here</h2>
          <textarea cols="40" rows="10"
            value={(prev, curr) => {prev += curr}}
            onChange={this.handleChange} />
        </div>
        <div className="markedDown">
        <Markdown>
          {this.state.markdownValue}
        </Markdown>
        </div>
      </div>
    )
  }
}

export default App;
