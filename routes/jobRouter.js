import express from "express";
const router = express.Router();
import { getAllJobs, postJob, getMyJobs, updateJob, deleteJob, getSingleJob } from "../controllers/jobController.js";
import { isAuthenticated } from "../middlewares/auth.js";

router.get("/getall", getAllJobs);
router.post("/post", isAuthenticated, postJob);
router.get("/getMyJobs", isAuthenticated, getMyJobs);
router.put("/updateJob/:id", isAuthenticated, updateJob);
router.delete("/deleteJob/:id", isAuthenticated, deleteJob);
router.get("/:id", isAuthenticated, getSingleJob);
export default router;
