const INPUT = "INPUT";
const RENEW_INPUT = "INPUT/RENEW";

export const inputN = (payload) => {
  return {
    type: INPUT,
    payload,
  };
};

export const renew_input = () => {
  return {
    type: RENEW_INPUT,
  };
};

const initialState = {
  input: "",
};

export const setInput = (state = initialState, action) => {
  switch (action.type) {
    case INPUT:
      return {
        input: action.payload,
      };
    case RENEW_INPUT:
      return {
        input: "",
      };
    default:
      return state;
  }
};
