import checkIfTwoNumbersAddUpTo from './index';

describe('should return whether any two numbers from the "list" add up to "k"', () => {
  it('should return true if expected value is 17', () => {
    const expected = 17, list = [10, 15, 3, 7];

    const result = checkIfTwoNumbersAddUpTo(list, expected);

    expect(result).toBe(true)
  })

  it('should return true if expected value is 18', () => {
    const expected = 18, list = [10, 15, 3, 7];

    const result = checkIfTwoNumbersAddUpTo(list, expected);

    expect(result).toBe(true)
  })


  it('should return false if expected value is 20', () => {
    const expected = 20, list = [10, 15, 3, 7];

    const result = checkIfTwoNumbersAddUpTo(list, expected);

    expect(result).toBe(false)
  })
})