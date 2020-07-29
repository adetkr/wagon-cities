import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ActiveCity extends Component { // A stateful component needs to constructor(props) { // be promoted into a class

constructor(props) {
  super(props);
}



render() {
  return (

      <div className="active-city">
        <h1> {this.props.set_active_city.name}</h1>
        <h4> {this.props.set_active_city.address}</h4>
        <img className="test" src={`https://kitt.lewagon.com/placeholder/cities/${this.props.set_active_city.slug}`}/>

      </div>
  );
}
}



function mapStateToProps(state) { return {
set_active_city: state.set_active_city };
}

export default connect(mapStateToProps, null)(ActiveCity);
