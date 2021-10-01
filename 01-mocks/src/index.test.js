const { rejects, strictEqual } = require("assert");
const { error } = require("./contants");
const File = require("./index");

(async () => {
  //   const result = await File.csvToJson("./../mocks/invalid-header.csv");
  //   const result = await File.csvToJson("./../mocks/threeItems-valid.csv");
  {
    const filePath = "./../mocks/emptyFile-invalid.csv";
    const rejection = new Error(error.FILE_LENTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = "./../mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = "./../mocks/invalid-header.csv";
    const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = "./../mocks/threeItems-valid.csv";
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        id: 123,
        name: "Emerson Braun",
        profession: "Backend Developer",
        age: 32,
      },
      {
        id: 321,
        name: "Eric Wendel",
        profession: "Javascript Instructor",
        age: 25,
      },
      {
        id: 234,
        name: "Xunda da Silva",
        profession: "Javascript Specialist",
        age: 80,
      },
    ];

    strictEqual(JSON.stringify(result), JSON.stringify(expected))
  }
})();
