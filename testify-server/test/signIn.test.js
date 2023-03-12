let signIn = require("../services/signin")
// jest.mock('../models', () => () => {
//     const SequelizeMock = require("sequelize-mock");
//     const dbMock = new SequelizeMock();
//     return dbMock.define('User',  {
//       id: 2,
//       name: 'Sazzad Shakil',
//       email: 'shakilahmedzx@gmail.com',
//       password: '10580997',
//       type: "student",
//       class: '7',
//       createdAt: "2019-01-01 13:30:31",
//       updatedAt: "2019-01-01 13:30:31"
//     })
//   });

describe("Test Sequelize Mocking", () => {  
    it("Should get user", async () => {
      const result = await signIn("shakilahmedzx@gmail.com","10580997");
      expect(result.success).toEqual(true);
    })
  })