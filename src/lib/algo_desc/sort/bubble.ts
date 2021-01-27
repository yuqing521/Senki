import makeAlgoSource from "../makeAlgoSource";

const makeShower = (arr: number[]) => `
const array = [${arr.toString()}];
for (var i = 0; i < array.length - 1; i++) {
  for (var j = 0; j < array.length - 1 - i; j++) {
    if (array[j] > array[j + 1]) {
      var temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}
`;

const desc = [
  "初始化数组",
  "外层循环，控制趟数，每一次找到一个最大值",
  "内层循环,控制比较的次数，并且判断两个数的大小",
  "如果前面的数大，放到后面(从小到大的冒泡排序)",
];

const makeRealCode = (arr: number[]) => `
const array = new SenkiArray(${arr.toString()});
await wait({line: 0, desc: 0})
for (var i = 0; i < array.length - 1; i++) {
  await wait({line: 1, desc: 1})
  for (var j = 0; j < array.length - 1 - i; j++) {
    const cancel = array.flag(j, "#407434")
    await wait({line: 2, desc: 3})
    if (array[j] > array[j + 1]) {
      await wait({line: 3, desc: 4})
      array.swap(j, j+1)
      await wait({line: [4,5,6], desc: 4})
    }
    cancel();
  }
}
`;

const makeBubbleAlgoSource = (arr: number[]) =>
  makeAlgoSource(makeShower(arr), desc, makeRealCode(arr));

export default makeBubbleAlgoSource;
