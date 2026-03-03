import jwt from "jsonwebtoken"
import User from "../model/user.js"

export const protect = async (req, res, next) => {
    let token
    let authHeader = req.headers.authorization || req.headers.Authorization
    
    if (authHeader && authHeader.toLowerCase().startsWith('bearer')) {
        token = authHeader.split(' ')[1]
    }

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No token provided"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.id)

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Not authorized, user not found"
            })
        }

        req.user = user
        next()

       
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Not authorized, token failed"
        })
    }
}