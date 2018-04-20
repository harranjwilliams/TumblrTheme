class TextPost extends React.Component {
  render() {
    return (
      <h1>Text Post</h1>
    );
  }
}

class QuotePost extends React.Component {
  componentDidMount() {
    alert(window.tumblrData.basicVariables.quote);
  }

  render() {
    return (
      <div><h1>Quote Post</h1></div>
    );
  }
}

ReactDOM.render(<TextPost />, document.getElementById('hjw-text-post'));
ReactDOM.render(<QuotePost />, document.getElementById('hjw-quote-post'));
