import name from '.'

describe('name', () => {
  it('should be a string of length greater than 0', () => {
    expect(typeof name).toBe('string')
    expect(name.length).toBeGreaterThan(0)
  })
})
