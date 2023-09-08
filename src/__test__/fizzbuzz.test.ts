import {describe, expect, it} from 'vitest'

const fizzbuzz = (number: number) => {
  if (typeof number !== 'number') throw new Error('paramater provided must be a number')
  if (Number.isNaN(number)) throw new Error('paramater provided must be a number')

  const multiples: { [multiplier: number]: string } = {3: 'fizz', 5: 'buzz'}

  let output = ''
  
  Object
    .entries(multiples)
    .forEach(([multiplier, word]) => {
      if (number % Number(multiplier) === 0) output += word
    })

  return output === '' ? number : output
}

describe('fizzbuzz', () => { 

  it('Should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('Should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow('paramater provided must be a number')
  })

  it('Should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz(NaN)).toThrow('paramater provided must be a number')
  })

  it('Should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('Should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('Should return "fizz" if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('Should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  it('Should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('Should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })

  it('Should return "fizzbuzz" if number provided is multiple of 15', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
})