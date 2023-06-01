import db from "./connection.js";

 function createUser(newUser) {
    let tempUser = {};
    tempUser = newUser;

     db.pass.insertOne(tempUser);
     return;
}
export default {
    createUser
}