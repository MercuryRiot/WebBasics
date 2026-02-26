// separate file importing the User class

import { User } from "./08_userModule.js";

const newUser = new User("Eve", "eve@gmail.com");
console.log(newUser.info());