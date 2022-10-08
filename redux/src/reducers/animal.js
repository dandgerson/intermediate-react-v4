const animal = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_ANIMAL":
      return action.payload;
    default:
      return state;
  }
};

export default animal;
