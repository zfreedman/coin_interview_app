import { EDIT_COIN, INIT_COINS } from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case EDIT_COIN:

      const newState = state.map(e => {
        if (e.id === action.coinID) {
          return {...e, ...action.payload}
        }
        return e;
      });
      return newState;

    case INIT_COINS:
      return action.payload;

    default:
      return state;
  }
}
