const PLUS_N = "number/PLUS_N";
const MINUS_N = "number/MINUS_N";

export const plus_number = (payload) => {
  return {
    type: PLUS_N,
    payload,
  };
};

export const minus_number = (payload) => {
  return {
    type: MINUS_N,
    payload,
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
export const calculator = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_N:
      return {
        ...state,
        number: state.number + action.payload,
      };
    case MINUS_N:
      return {
        ...state,
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
