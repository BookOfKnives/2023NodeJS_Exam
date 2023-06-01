import db from "./connection.js";

db.shops.updateOne({ city: "Roskilde" }, {$set : { shops: [ 1 ]}});