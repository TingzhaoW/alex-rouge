import { Card, CardName, CardType } from "./type";
import * as Actions from "./action";

export const shark: Card = {
  health: 3,
  cost: 4,
  cardName: CardName.Shark,
  type: CardType.Minion,
  isCombo: false,
  originalCost: 4,
  action: Actions.SharkAction,
};

export const foxy: Card = {
  health: 2,
  cost: 2,
  cardName: CardName.Foxy,
  type: CardType.Minion,
  isCombo: false,
  originalCost: 2,
  action: Actions.FoxyAction,
};

export const scabbs: Card = {
  health: 3,
  cost: 4,
  cardName: CardName.Scabbs,
  type: CardType.Minion,
  isCombo: true,
  originalCost: 4,
  action: Actions.ScabbsAction,
};

export const shallowcaster: Card = {
  health: 4,
  cost: 5,
  cardName: CardName.Shallowcaster,
  type: CardType.Minion,
  isCombo: false,
  originalCost: 5,
  action: Actions.ShallowcasterAction,
};

export const etc: Card = {
  health: 4,
  cost: 4,
  cardName: CardName.ETC,
  type: CardType.Minion,
  isCombo: false,
  originalCost: 4,
  action: Actions.ETCAction,
};

export const alex: Card = {
  health: 8,
  cost: 9,
  cardName: CardName.Alex,
  type: CardType.Minion,
  isCombo: false,
  originalCost: 9,
  action: Actions.AlexAction,
};

export const coin: Card = {
  cost: 0,
  cardName: CardName.Coin,
  type: CardType.Spell,
  isCombo: false,
  originalCost: 0,
  action: Actions.CoinAction,
};

export const shadowstep: Card = {
  cost: 0,
  cardName: CardName.Shadowstep,
  type: CardType.Spell,
  isCombo: false,
  originalCost: 0,
  action: Actions.ShadowstepAction,
};

export const bounce: Card = {
  cost: 3,
  cardName: CardName.Bounce,
  type: CardType.Spell,
  isCombo: false,
  originalCost: 3,
  action: Actions.BounceAction,
};

export const potion: Card = {
  cost: 4,
  cardName: CardName.Potion,
  type: CardType.Spell,
  isCombo: false,
  originalCost: 4,
  action: Actions.PotionAction,
};
