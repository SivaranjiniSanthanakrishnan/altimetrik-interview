let initialFilterValues = {
  filterValues: {
    location: "",
    bodyType: "",
    owners: "",
    budget: "",
    fuelType: "",
    transmission: "",
    brand: {
      wagonR: false,
      celerio: false,
      swift: false,
      swiftDzire: false,
    },
    owners: "",
    budget: 200000,
    fuelType: "",
    transmission: "",
  },
};

export const carListFilterReducer = (state = initialFilterValues, action) => {
  switch (action.type) {
    case "UPDATE_FILTER_STATE": {
      if (
        action.payload.name === "location" ||
        action.payload.name === "bodyType" ||
        action.payload.name === "owners" ||
        action.payload.name === "budget" ||
        action.payload.name === "fuelType" ||
        action.payload.name === "transmission"
      ) {
        return {
          ...state,
          filterValues: {
            ...state.filterValues,
            [action.payload.name]: action.payload.value,
          },
        };
      } else if (action.payload.name === "brand") {
        return {
          ...state,
          filterValues: {
            ...state.filterValues,
            [action.payload.name]: {
              ...state.filterValues[action.payload.name],
              [action.payload.value]:
                !state.filterValues[action.payload.name][action.payload.value],
            },
          },
        };
      }
    }
    default: {
      return state;
    }
  }
};
