import { deepCopy, deepEqual } from "./helper";
import * as Cards from "./card";
import { Card, CardName, CardType, State, createState } from "./type";

const play = (card: Card, state: State) => {
  // 费用计算
  const nextReduce = state.reduce.shift() ?? 0;
  let cost = card.cost;
  cost = cost - nextReduce < 0 ? 0 : card.cost - nextReduce;

  // 连击
  cost = card.isCombo ? cost - state.comboReduce : cost;
  state.comboReduce = card.isCombo ? 0 : state.comboReduce;

  state.mana -= cost;

  // 出牌
  const index = state.hand.findIndex((i) => deepEqual(i, card));
  state.hand.splice(index, 1);
  // 上怪
  if (card.type === CardType.Minion) {
    state.board.push(card);
  }

  // 触发卡牌效果
  state.path.push(card.cardName);
  card.action(state);

  state.combo = true;
};

export let max = 0;
let count = 0;

export const recur = (state: State) => {
  count++;
  if (state.result > max) {
    console.log(max, state);
    max = state.result;
  }
  for (const card of state.hand) {
    // can't play more minion
    if (card.type === CardType.Minion && state.board.length === 7) {
      continue;
    }
    // no enough mana
    if (
      card.cost -
        (state.reduce[0] ?? 0) -
        (card.isCombo ? state.comboReduce : 0) >
      state.mana
    ) {
      continue;
    }
    const copyState = deepCopy(state);
    play(card, copyState);
    recur(copyState);
  }
};

export const start = () => {
  const hand = [
    Cards.shark,
    Cards.shallowcaster,
    Cards.foxy,
    Cards.scabbs,
    Cards.etc,
  ];
  const state = createState(hand, 7);
  state.combo = true;
  console.log("start");
  recur(state);
  console.log(max, count);
};
