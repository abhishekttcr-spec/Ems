import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addDepartment ,getDepartment,editDepartment,UpdateDepartment,deleteDepartment} from '../controllers/departmentController.js'
const router = express.Router()

router.get("/", authMiddleware, getDepartment)
router.get("/:id", authMiddleware, editDepartment)
router.put("/:id", authMiddleware, UpdateDepartment)
router.delete("/:id", authMiddleware, deleteDepartment)
router.post("/add", authMiddleware, addDepartment)


export default router 
