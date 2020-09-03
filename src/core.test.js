const createCore = require("./core");

function createMock() {
  function start() {
    console.log("[mock] ...");
  }

  function stop() {
    console.log("[mock] ...");
  }

  return { start, stop };
}

describe("Core quando importado", () => {
  test("deve ter o metodo #start e #stop", () => {
    const databaseMock = createMock();
    const webserverMock = createMock();

    const core = createCore({
      database: databaseMock,
      webserver: webserverMock,
    });

    expect(core).toHaveProperty("start");
    expect(core).toHaveProperty("stop");
  });
});

describe("Core quando inicializado", () => {
  test("não deve retornar erros", () => {
    const databaseMock = createMock();
    const webserverMock = createMock();

    const core = createCore({
      database: databaseMock,
      webserver: webserverMock,
    });

    expect(() => {
      core.start();
    }).not.toThrow();
  });
});
