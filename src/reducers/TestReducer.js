export const TestReducer = (state = [], action) => {
  switch (action.type) {
    case "TEST":
      return 1;
    default:
      return state;
  }
}
