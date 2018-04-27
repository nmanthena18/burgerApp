import * as actionType from './actions';

const initialState = {
    ingredients: null,
    totalPrice:4,
}

const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case actionType.ADD_INGREDIENT :
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName] + 1
                }
            }
        case actionType.REMOVE_INGREDIENT :
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName] - 1
                }
            }
        default :
            return state;

    }
}   

export default reducer;