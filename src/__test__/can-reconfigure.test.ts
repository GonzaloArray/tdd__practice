import { describe, expect, it } from "vitest";

const canConfigure = (from: string, to: string) => {
  if (typeof from !== 'string') throw new Error('from is not a string')
  if (typeof to !== 'string') throw new Error('to is not a string')

  const isSameLength = from.length === to.length
  if (!isSameLength) return false
  const hasSameUniqueLetters = new Set(from).size === new Set(to).size

  if (!hasSameUniqueLetters) return false

  return true  
}

describe('canReconfigure', () => {
  it('should throw if second parameter is not a string', () => {
    expect(() => canConfigure(2)).toThrow()
  })

  it('should throw if second parameter is not a string', () => {
    expect(() => canConfigure(2)).toThrow()
  })

  it('should return a boolean', () => {
    expect(() => canConfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('Should return false if strings provided have different length', () => {
    expect(() => canConfigure('abc', 'de')).toBe(false)
  })

  it('Should return false if strings provided have different length', () => {
    expect(() => canConfigure('abc', 'ddd')).toBe(false)
  })

  it('should return false if strings has different order of transformations', () => {
    expect(() => canConfigure('XBOX', 'XXBO')).toBe(false)
  })

})