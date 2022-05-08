export const sum = (array: number[]) => {
  const MAX = 20
  array.reduce((accumulator, current) => {
    if (current > MAX && current % 2 === 0) {
      current = MAX
    }
    accumulator += current
    return accumulator
  })
}
