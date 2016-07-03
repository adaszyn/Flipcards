export const FlipcardReducer = (state = {
  flipcards: [],
  selectedFlipcardIndex: -1
}, action) => {
    switch (action.type) {
      case "ADD_FLIPCARD":
        return Object.assign({},
           state,
            {flipcards: [...state.flipcards, {
                  id: action.id,
                  front: action.front,
                  back: action.back
                }
              ]
            })

      case "GET_NEXT":
        return Object.assign({}, state, {selectedFlipcardIndex: (state.selectedFlipcardIndex + 1) % state.flipcards.length})
      case "GET_PREVIOUS":
          return Object.assign({}, state, {selectedFlipcardIndex: state.selectedFlipcardIndex === 0 ? state.flipcards.length - 1 : state.selectedFlipcardIndex - 1})
      case "REMOVE_FLIPCARD":
        return Object.assign({}, state, {flipcards: [
          ...state.flipcards.filter((flipcard) => flipcard.id !== action.id)
        ]})
      default:
        return state;
    }
}
