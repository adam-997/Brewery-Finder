import * as ActionTypes from "./actionTypes";

export const User = (
  state = {
    userId: null,
    username: "",
    authorities: [],
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
      };

    case ActionTypes.DELETE_USER:
      return { ...state, userId: null, username: "", authorities: [] };

    default:
      return state;
  }
};
