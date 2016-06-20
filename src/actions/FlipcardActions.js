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

export const GetNextFlipcard = () => {
  return {
    type: "GET_NEXT"
  }
}
