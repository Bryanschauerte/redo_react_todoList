var React = require('react');
var ReactDOM = require('react-dom');
var ListContainer = require('./ListContainer');

var App = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <ListContainer />
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
