import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { getProductData } from '../action';

class ProductList extends Component {
    static propTypes = {
        data: PropTypes.object
    };
    componentWillMount(){
      this.props.fetchData();
    }

  render() {
    console.log(JSON.stringify(this.props.data));
return <div> <Link to={`/cart`} >Shopping Cart</Link></div>;

}
}

const mapStateToProps = state => ({
  data: state.cart
});

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(getProductData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
