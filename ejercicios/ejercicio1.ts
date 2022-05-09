export const exercise = (array: number[]) => {
  const MAX = 20
  const sum = array.reduce((accumulator, current) => {
    if (current > MAX && current % 2 === 0) {
      current = MAX
    }
    accumulator += current
    return accumulator
  })
  return (action: (args: number) => void) => {
    action(sum)
  }
}
