const Service = require(".");
const sinon = require("sinon");
const { deepStrictEqual } = require("assert");

const BASE_URL_1 = "https://swapi.dev/api/planets/1/";
const BASE_URL_2 = "https://swapi.dev/api/planets/2/";

const mocks = {
  tatooine: require("./mocks/tatooine.json"),
  alderaan: require("./mocks/alderaan.json"),
};
(async () => {
  //{
  //const response = await new Service().makeRequest(BASE_URL_1)
  //console.log(JSON.stringify(response))
  //}

  const service = new Service();
  const stub = sinon.stub(service, service.makeRequest.name);

  stub.withArgs(BASE_URL_1).resolves(mocks.tatooine);
  stub.withArgs(BASE_URL_2).resolves(mocks.alderaan);

  {
    const result = await service.getPlanets(BASE_URL_1);
    const expected = {
      name: "Tatooine",
      surfaceWater: "1",
      apperedIn: 5,
    };
    deepStrictEqual(result, expected)
  }
  {
    const result = await service.getPlanets(BASE_URL_2);
    const expected = {
      name: "Alderaan",
      surfaceWater: "40",
      apperedIn: 2,
    };
    deepStrictEqual(result, expected)
  }
})();
