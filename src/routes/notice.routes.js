import { Router } from "express";
import * as ctrllr from "../controllers/notice.controller.js";

const router = Router();

router.get("/home", ctrllr.getNotices);
router.post("/create-notice", ctrllr.createNotice);

export default router;