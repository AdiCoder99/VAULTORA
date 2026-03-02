import express from "express"
import {
    createPassword,
    getAllPasswords,
    getPasswordById,
    updatePassword,
    deletePassword,
    searchPasswords
} from "../controllers/passwordController.js"
import { protect } from "../middleware/auth.js"

const router = express.Router()

// Password Routes
router.post('/add', protect, createPassword)
router.get('/all', protect, getAllPasswords)
router.get('/search', protect, searchPasswords)
router.get('/:id', protect, getPasswordById)
router.put('/:id', protect, updatePassword)
router.delete('/:id', protect, deletePassword)

export default router