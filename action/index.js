import axios from 'axios';

export function getProductData() {
    return (dispatch => {
        axios.get('https://api.myjson.com/bins/qhnfp').then((respons) => {
            dispatch({
                type: 'GET_PRODUCT_DATA',
                value: respons.data
            });
        });
    })


}
