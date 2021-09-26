const data = require('./script');

describe('Exercicio 5', () => {
  it('', () => {
    const first = jest
    .spyOn(data, "upperCase")
    .mockImplementation(a => a.toLowerCase());

  expect(first("UPPERCASE")).toBe("uppercase");
  expect(first).toHaveBeenCalled();
  expect(first).toHaveBeenCalledTimes(1);
  expect(first).toHaveBeenCalledWith("UPPERCASE");

  data.upperCase.mockRestore();

  expect(data.upperCase("lowercase")).toBe("LOWERCASE");

  })
})