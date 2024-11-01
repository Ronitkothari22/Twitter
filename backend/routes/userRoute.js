import express from "express";
import { Login, Register, bookmark, follow, getMyProfile, getOtherUsers, logout, unfollow,updateUserImages} from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";
import { updateUserDescription } from "../controllers/userController.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(logout);
router.route("/bookmark/:id").put(isAuthenticated, bookmark)
router.route("/profile/:id").get(isAuthenticated, getMyProfile);
router.route("/otheruser/:id").get(isAuthenticated, getOtherUsers);
router.route("/follow/:id").post(isAuthenticated, follow);
router.route("/unfollow/:id").post(isAuthenticated, unfollow);
router.put('/updateUserDescription', updateUserDescription);
router.put('/updateUserImages', updateUserImages);

export default router;