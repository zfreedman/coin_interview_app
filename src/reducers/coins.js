import { INIT_COINS } from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case INIT_COINS:
      return action.payload;
    default:
      return state;
  }
}
