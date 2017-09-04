
export default function ui(state = getInitialState(), action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state
            };
        case 'REMOVE_ITEM':
            return {
                ...state
            };
        case 'GET_PRODUCT_DATA': 
        return { ...state, items: action.value};
        default:
            return state
    }
}

function getInitialState() {
return {
    items:[],
    cart:[]
};
}

