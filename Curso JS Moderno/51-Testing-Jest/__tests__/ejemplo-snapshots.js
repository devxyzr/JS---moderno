const cliente = {
  nombre: "Juan Pabla",
  balance: 500,
  tipo: "Premium",
};

describe("Testing al cliente", () => {
  test("Es juan pablo", () => {
    expect(cliente).toMatchSnapshot();
  });
});
