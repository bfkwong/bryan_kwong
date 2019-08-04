const initialState = {
  professionModeById: {
    0: "The Programmer",
    1: "The Photographer",
    2: "The Foodie",
    3: "The Businessman",
    4: "The Idiot"
  }
};

export default function enumReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
