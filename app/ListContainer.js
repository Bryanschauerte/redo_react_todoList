var React = require('react');
var List = require('./List');
var AddItem = require('./AddItem');

var ListContainer = React.createClass({

  getInitialState: function(){
    return {
      list: []
    }
  },

  handleAddItem: function(newItem){
    this.setState({
      list: this.state.list.concat([newItem])
    })
  },
  handleRemoveItem: function(){
    var newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList
    })
  },
  render: function(){
    var styles = {
        container: {
          border: "1px solid rgb(208, 208, 208)",
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 5
        }
    };
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center"> Todo List </h3>
          <AddItem add={this.handleAddItem}/>
          <List items={this.state.list} remove={this.handleRemoveItem}/>
        </div>
      </div>
    )
  }
})

module.exports = ListContainer;
