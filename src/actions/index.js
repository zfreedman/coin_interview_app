import {
  EDIT_COIN,
  INIT_COINS,
} from "actions/types";

export function initCoins(coins) {
  return {
    type: INIT_COINS,
    payload: coins
  };
}

export function editCoin(coinID, editObj) {
  return {
    type: EDIT_COIN,
    payload: editObj,
    coinID
  };
}
