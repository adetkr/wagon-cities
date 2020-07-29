import React , { Component } from 'react';
import { setActiveCity } from '../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class City extends Component { // A stateful component needs to constructor(props) { // be promoted into a class

constructor(props) {
  super(props);
}

handleClick = () => {
  this.props.setActiveCity(this.props.city);
}

render() {
  return (
    <div className="city" onClick={this.handleClick}>
      <h4> {this.props.city.name}</h4>
    </div>
  );
}
}

function mapDispatchToProps(dispatch) { return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch );
}

function mapStateToProps(state) { return {
set_active_city: state.set_active_city };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);

