let result: number = 0

let inputs: (string | number)[] = [2, '+', 3]

const calculate = (value: (string | number)[]): number => {
    let numberToCalc: number = eval(value.join(''))

    return result = numberToCalc
}

inputs.push('+')
inputs.push('(')
inputs.push(3)

inputs.push('+')
inputs.push(3)
inputs.push(')')

inputs.push('*')
inputs.push(3)

console.log(calculate(inputs))
