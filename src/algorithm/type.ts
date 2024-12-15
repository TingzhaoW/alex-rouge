import * as Cards from "./card";

export enum CardType {
  Spell = "Spell",
  Minion = "Minion",
}

export enum CardName {
  Shark = "鲨鱼",
  Foxy = "狐狸",
  Scabbs = "刀油",
  Shallowcaster = "暗影施法者",
  ETC = "牛",
  Alex = "红龙",
  Coin = "硬币",
  Shadowstep = "暗影步",
  Bounce = "舞动",
  Potion = "幻觉",
}

export interface State {
  hand: Card[];
  board: Card[];
  mana: number;
  combo: boolean;
  shark: boolean;
  result: number;
  path: string[];
  reduce: number[];
  comboReduce: number;
  ETCRemain: Card[];
}

export const createState = (hand: Card[], mana: number): State => {
  return {
    hand,
    board: [],
    mana,
    combo: false,
    shark: false,
    result: 0,
    path: [],
    reduce: [],
    comboReduce: 0,
    ETCRemain: [Cards.alex, Cards.potion, Cards.bounce],
  };
};

export interface Card {
  health?: number;
  cost: number;
  cardName: CardName;
  type: CardType;
  isCombo: boolean;
  originalCost: number;
  action: (state: State) => void;
}
