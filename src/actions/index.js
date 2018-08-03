import {
  INIT_COINS,
} from "actions/types";

export function initCoins(coins) {
  return {
    type: INIT_COINS,
    payload: coins
  };
}
