const createWebserver = require("./webserver");

describe("Webserver quando importado", () => {
  test("deve ter o metodo #start e #stop", () => {
    const webserver = createWebserver();

    expect(webserver).toHaveProperty("start");
    expect(webserver).toHaveProperty("stop");
  });
});

describe("Webserver quando inicializado", () => {
  test("não deve retornar erros", () => {
    const webserver = createWebserver();

    expect(() => {
      webserver.start();
    }).not.toThrow();
  });
});
