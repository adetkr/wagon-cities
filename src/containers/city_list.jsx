import React , { Component } from 'react';
import City from './city.jsx';
import { setCities } from '../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CityList extends Component { // A stateful component needs to constructor(props) { // be promoted into a class

constructor(props) {
  super(props);
}

componentWillMount(){
  this.props.setCities();
}

render() {
  console.log(this.props.cities);
  return (


      <div className="cities">
        { this.props.cities.map(city => {
        return <City city={city}/>
      })}
      </div>

  );
}
}

function mapDispatchToProps(dispatch) { return bindActionCreators(
    { setCities: setCities },
    dispatch );
}

function mapStateToProps(state) { return {
cities: state.cities };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);

