const initState = {
  search: "",
  status: "All",
  prioriry: [],
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchFilterChange":
      return {
        ...state.filter,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
