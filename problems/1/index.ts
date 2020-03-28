export default function checkIfTwoNumbersAddUpTo(list, expected) {
  const combineNumbers = (numberA) => list.find((numberB) => {
    return  (numberB + numberA) === expected;
  });

  return list.filter(combineNumbers).length > 1
}