import { Router } from "express";
import { verifiedJWT } from "../middelwarejwt.js";
import {
  registerUser,
  loginUser,
  logOutUser,
  refreshAccessToken,
} from "../controllers/usercontroller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifiedJWT, logOutUser);
router.route("/refresh-token").post(refreshAccessToken);

export default router;
