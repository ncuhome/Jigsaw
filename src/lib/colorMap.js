const linerGradient = (start, end) => `linear-gradient(to bottom right, ${start}, ${end})`;

export const colorMapGradient = [
  "rgb(0,0,0)",
  linerGradient("#23A3FF", "#21CFDF"),
  linerGradient("#eb3349", "#f45c43"),
  linerGradient("#ff8008", "#ffc837"),
  linerGradient("#56ab2f", "#a8e063"),
  linerGradient("#eb6539", "#d72972"),
];

export const colorMapPure = ["rgb(0,0,0)", "#00bfff", "#eb6539", "#ff8008", "#d72972", "#4ad72b"];
