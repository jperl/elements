class App extends React.Component {
  render() {
    return <FusionScene />;
  }
}

Meteor.startup(function () {
  ReactDOM.render(<App />, document.getElementById('render-target'));
});
