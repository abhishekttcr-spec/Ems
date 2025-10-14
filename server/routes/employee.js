import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addEmployee ,upload,getEmployees} from '../controllers/employeeController.js'
const router = express.Router()

router.get("/", authMiddleware, getEmployees)
// router.get("/:id", authMiddleware, editDepartment)
// router.put("/:id", authMiddleware, UpdateDepartment)
// router.delete("/:id", authMiddleware, deleteDepartment)
router.post("/add", authMiddleware,upload.single("image"), addEmployee)


export default router 
