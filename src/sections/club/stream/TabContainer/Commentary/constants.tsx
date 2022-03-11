import UndoIcon from "assets/icon/undo";

export const scoreTitles = {
  BEHIND_HOME: 'Behind - Home',
  BEHIND_AWAY: 'Behind - Away',
  GOAL_HOME: 'Goal - Home',
  GOAL_AWAY: 'Goal - Away',
}

export const Scoring: Array<{ title: string, type: string }> = [

  {
    type: "+1",
    title: scoreTitles.BEHIND_HOME
  },
  {
    type: "+6",
    title: scoreTitles.GOAL_HOME
  },
  {
    type: "+1",
    title: scoreTitles.BEHIND_AWAY
  },
  {
    type: "+6",
    title: scoreTitles.GOAL_AWAY
  },
  // {
  //   type: <UndoIcon iSize={{ x: 15, y: 15 }} />,
  //   title: "Undo last action",
  // },
];

export const ScoreTypes = [
  {
    type: "Mark",
    value: "mark",
  },
  {
    type: "Contested Mark",
    value: "Contested Mark",
  },
  {
    type: "Free Kick",
    value: "Free Kick",
  },
  {
    type: "Bounce",
    value: "Bounce",
  },
  {
    type: "Handball",
    value: "Handball",
  },
  {
    type: "Kick",
    value: "Kick",
  },
  {
    type: "Hitout",
    value: "Hitout",
  },
  {
    type: "Turnover",
    value: "Turnover",
  },
  {
    type: "Tackle",
    value: "Tackle",
  },
  {
    type: "Clearance",
    value: "Clearance",
  },
];

export const options = [
  {
    title: "Scoring",
    value: "scoring",
  },
  {
    title: "Key Moments",
    value: "keyMoments",
  },
];