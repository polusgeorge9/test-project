import { Router } from "express";
import {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from "../controllers/company.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.post("/", createCompany);
router.get("/", getCompanies);
router.get("/:id", getCompanyById);
router.put("/:id", updateCompany);
router.delete("/:id", deleteCompany);

export default router;
