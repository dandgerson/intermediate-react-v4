const location = (state = "Seatle, WA", action) => {
  switch (action.type) {
    case "CHANGE_LOCATION":
      return action.payload;
    default:
      return state;
  }
};

export default location;
