var React = require('react');

var Base = React.createClass({
  render(){

    return(
      <div className="">
        <h1>Header</h1>
        {/*Insert the children routes - pages*/}
        {this.props.children}
        <h1>Footer</h1>
      </div>
    );
  }
});

module.exports = Base
