import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {showNextSlot} from '../action';

export default class  DaySlot extends Component {

 
  render(){
      return(
        <span className="appointment-button-wraper">
          test
        </span>
      );
    }

}

// const mapDispatchToProps = dispatch => ({
//     dispatch
// })

// export default connect(
//   mapDispatchToProps
// )(DaySlot)
