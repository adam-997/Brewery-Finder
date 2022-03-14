import * as ActionTypes from "./actionTypes";

export const User = (
  state = {
    userId: null,
    username: "",
    authorities: [],
    role: "",
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        ...state,
        userId: action.payload.userId,
        username: action.payload.username,
        authorities: action.payload.authorities,
        role: action.payload.role,
      };

    case ActionTypes.DELETE_USER:
      return {
        ...state,
        userId: null,
        username: "",
        authorities: [],
        role: "",
      };

    default:
      return state;
  }
};
