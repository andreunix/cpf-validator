const validatorCpf = require("../src/cpf-validetor")

test("Deve validar o cpf A", function () {
  const isValid = validatorCpf.validate("935.411.347-80")
  expect(isValid).toBeTruthy()
})

test("Deve validar o cpf B", function () {
  const isValid = validatorCpf.validate("357.188.378-05")
  expect(isValid).toBeTruthy()
})

test("Deve validar o cpf C", function () {
  const isValid = validatorCpf.validate("987.654.321-00")
  expect(isValid).toBeTruthy()
})

test("Não deve Validar (todos os numeros iguais)", function () {
  const isValid = validatorCpf.validate("111.111.111-11")
  expect(isValid).toBeFalsy()
})

test("Não deve Validar (número aleatório)", function () {
  const isValid = validatorCpf.validate("123.456.789-00")
  expect(isValid).toBeFalsy()
})

test("Não deve Validar (além do limite)", function () {
  const isValid = validatorCpf.validate("123.456.789-00000")
  expect(isValid).toBeFalsy()
})

test("Não deve Validar (a baixo do limite)", function () {
  const isValid = validatorCpf.validate("123456789")
  expect(isValid).toBeFalsy()
})

test("Não deve validar o cpf con letras", function () {
  const isValid = validatorCpf.validate("987a654b321c00")
  expect(isValid).toBeFalsy()
})


test("Deve tentar validar um cpf null", function () {
  const isValid = validatorCpf.validate(null);
  expect(isValid).toBeFalsy();
});

test("Deve tentar validar um cpf undefined", function () {
  const isValid = validatorCpf.validate(undefined);
  expect(isValid).toBeFalsy();
});