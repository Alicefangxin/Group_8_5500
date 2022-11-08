import express from "express";
import {
    updateUser,
    deleteUser,
    getUser,
    getUsers,
    updateUserReservations,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id",verifyUser, deleteUser);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/",verifyAdmin, getUsers);

// UPDATE User Reservation
router.put("/reservation/:id", updateUserReservations);


export default router;