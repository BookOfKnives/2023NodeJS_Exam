import db from "./connection.js";

//const foundShops = await db.shops.find({ city: "Roskilde" }).toArray();

async function getAll(){
    const data = await db.pass.find({ }).toArray();
    return data;
}

export default {
    getAll
}