const initState = {
  filters: {
    search: "",
    status: "All",
    prioriry: [],
  },
};

const filterReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "filters/searchFilterChange":
      return {
        ...state,
        filters: {
          ...state.filter,
          search: action.payload,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
