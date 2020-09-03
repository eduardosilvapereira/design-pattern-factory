const createDatabase = require("./database");

describe("Database quando importado", () => {
  test("deve ter o metodo #start e #stop", () => {
    const database = createDatabase();

    expect(database).toHaveProperty("start");
    expect(database).toHaveProperty("stop");
  });
});

describe("Database quando inicializado", () => {
  test("não deve retornar erros", () => {
    const database = createDatabase();

    expect(() => {
      database.start();
    }).not.toThrow();
  });
});
