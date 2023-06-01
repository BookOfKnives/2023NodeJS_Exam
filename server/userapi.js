import create from "./database/create.js";
import read from "./database/read.js";

import bcrypt from "bcrypt";

import { Router } from "express";

const router = Router();

router.post("/api/users/", async (req, res) => { 
    let newUser = req.body;
    newUser.password = await bcrypt.hash(newUser.password, 12);
    create.createUser(newUser);
    res.send({ data: newUser });

});

router.get("/api/users/", async (req, res) => {
    const data = await read.getAll();
    return res.status(200).send({ data: data }).end()
});

export default router;