let currentFlipcardIndex = 0;

export const setFlipcardGlobalIndex = (index) => {
  currentFlipcardIndex = index;
}

export const AddFlipcard = ({front, back} = {}) => {
  return {
    front,
    back,
    id: currentFlipcardIndex++,
    type: "ADD_FLIPCARD"
  }
}

export const RemoveFlipcard = (id) => {
  return {
    type: "REMOVE_FLIPCARD",
    id
  }
}

export const getNextFlipcard = () => {
  return {
    type: "GET_NEXT"
  }
}


export const getPreviousFlipcard = () => {
  return {
    type: "GET_PREVIOUS"
  }
}
