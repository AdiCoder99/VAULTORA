import User from "../model/user.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '7d'})
}

// Register User
export const registerUser = async (req, res) => {
    console.log(req.body);
    
    try {
        const {name, email, password} = req.body

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({success: false, message: "Please provide all fields"})
        }

        // Check if user already exists
        const userExists = await User.findOne({email})
        if (userExists) {
            return res.status(400).json({success: false, message: "User already exists"})
        }

        // Create user
        const user = await User.create({
            name,
            email,
            password
        })

        // Generate token
        const token = generateToken(user._id)

        // Send response
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
            
            
        })
        
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

// Login User
export const loginUser = async (req, res) => {
    console.log(req.body);
    
    try {
        const {email, password} = req.body

        // Validate input
        if (!email || !password) {
            return res.status(400).json({success: false, message: "Please provide email and password"})
        }

        // Check if user exists
        const user = await User.findOne({email})
        if (!user) {
            return res.status(401).json({success: false, message: "Invalid credentials"})
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({success: false, message: "Invalid credentials"})
        }

        // Generate token
        const token = generateToken(user._id)

        // Send response
        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

// Get Current User
export const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}