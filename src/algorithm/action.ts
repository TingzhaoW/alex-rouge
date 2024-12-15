import { recur } from "./algo";
import { deepCopy } from "./helper";
import { State } from "./type";

export const PotionAction = (state: State) => {
  for (const card of state.board) {
    const copyCard = deepCopy(card);
    copyCard.health = 1;
    copyCard.cost = 1;
    if (state.hand.length < 10) {
      state.hand.push(copyCard);
    } else {
      break;
    }
  }
};

export const BounceAction = (state: State) => {
  for (const card of state.board) {
    card.cost = 1;
    if (state.hand.length < 10) {
      state.hand.push(card);
    } else {
      break;
    }
  }
  state.board = [];
  state.shark = false;
};

export const FoxyAction = (state: State) => {
  state.comboReduce += state.shark ? 4 : 2;
};

export const ScabbsAction = (state: State) => {
  const costReduce = state.shark ? 6 : 3;
  if (state.combo) {
    if (state.reduce.length === 0) {
      state.reduce.push(costReduce);
      state.reduce.push(costReduce);
    } else {
      state.reduce[0] += costReduce;
      state.reduce.push(costReduce);
    }
  }
};

export const SharkAction = (state: State) => {
  state.shark = true;
};

export const AlexAction = (state: State) => {
  state.result += state.shark ? 16 : 8;
};

export const CoinAction = (state: State) => {
  state.mana += 1;
};

export const ShallowcasterAction = (state: State) => {
  for (let i = 0; i < state.board.length - 1; i++) {
    const card = state.board[i];
    if (card.cardName !== "刀油" && card.cardName !== "红龙") {
      continue;
    }
    const copyState = deepCopy(state);
    const copyCard = deepCopy(card);
    copyCard.cost = 1;
    copyCard.health = 1;
    copyState.hand.push(copyCard);
    if (copyState.shark && state.hand.length !== 10) {
      const copyCard2 = deepCopy(copyCard);
      copyState.hand.push(copyCard2);
    }
    state.combo = true;
    recur(copyState);
  }
};

export const ETCAction = (state: State) => {
  for (let i = 0; i < state.ETCRemain.length; i++) {
    const card = deepCopy(state.ETCRemain[i]);
    const copyState = deepCopy(state);
    copyState.ETCRemain.splice(i, 1);
    copyState.hand.push(card);
    if (state.shark && copyState.ETCRemain.length > 0) {
      for (let j = 0; j < copyState.ETCRemain.length; j++) {
        const secondCard = deepCopy(copyState.ETCRemain[j]);
        copyState.ETCRemain.splice(j, 1);
        if (copyState.hand.length !== 10) {
          copyState.hand.push(secondCard);
        }
        state.combo = true;
        recur(copyState);
      }
    } else {
      state.combo = true;
      recur(copyState);
    }
  }
};

export const ShadowstepAction = (state: State) => {
  for (let i = 0; i < state.board.length; i++) {
    const card = state.board[i];
    const copyState = deepCopy(state);
    card.cost = Math.max(0, card.originalCost - 2);
    copyState.hand.push(card);
    state.combo = true;
    recur(copyState);
  }
};
