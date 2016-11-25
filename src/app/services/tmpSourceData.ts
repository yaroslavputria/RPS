// тимчасовий масив статистики
let arrOfStats: any[] = [];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      for (let l = 0; l < 3; l++) {
        let tmpIndex = '' + i + j + k + l;
        arrOfStats[tmpIndex] = {
          0: randomInteger(0, 1),
          1: randomInteger(0, 1),
          2: randomInteger(0, 1)
        };
      }
    }
  }
}

export { arrOfStats };

function randomInteger(min: number, max: number): number {
  let rand = min + Math.random() * (max - min);
  rand = Math.round(rand);
  return rand;
};
