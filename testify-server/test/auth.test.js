let signIn = require("../services/signin")
let signUp = require("../services/signup")
let User = require('../models').User
let user = {
  id: 2,
  name: 'Sazzad Shakil',
  email: 'shakilahmedzx@gmail.com',
  password: '10580997',
  type: "student",
  class: '7',
  createdAt: "2019-01-01 13:30:31",
  updatedAt: "2019-01-01 13:30:31"
}
jest.spyOn(User, 'findOne').mockImplementation(() =>  new Promise((resolve, reject)=> resolve(user)))
jest.spyOn(User, 'create').mockImplementation(() =>  new Promise((resolve, reject)=> resolve(user)))
// jest.mock('../models/user.js', () => () => {
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

describe("Test User Authentication", () => { 
  const env = process.env

  beforeEach(() => {
      jest.resetModules()
      process.env = { ...env }
  })

  afterEach(() => {
      process.env = env
  }) 
    it("Signin Success", async () => {
      process.env.API_SECRET = "29153495872359hhjghsdkfghfd"
      const result = await signIn("shakilahmedzx@gmail.com","10580997");
      expect(result.success).toEqual(true);
    })

    it("SignUp Success", async () => {
      const result = await signUp(user);
      expect(result.success).toEqual(true);
    })
  })