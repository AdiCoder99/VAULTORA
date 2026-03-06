import Password from "../model/password.js"

// Create a new password entry
export const createPassword = async (req, res) => {
    console.log(req.body);
    
    try {
        const userId = req.user._id
        const { website, username, password } = req.body

        if (!website || !username || !password) {
            return res.status(400).json({success: false, message: "Please provide all fields"})
        }

        const newPassword = await Password.create({
            userId,
            website,
            username,
            password
        })

        res.status(201).json({
            success: true,
            message: "Password added successfully",
            data: newPassword
        })
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

// Get all passwords for a user
export const getAllPasswords = async (req, res) => {
    try {
        const userId = req.user._id
        const passwords = await Password.find({userId})

        res.status(200).json({
            success: true,
            data: passwords
        })
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

// Get a specific password by ID
export const getPasswordById = async (req, res) => {
    try {
        const { id } = req.params
        const userId = req.user._id

        const password = await Password.findOne({_id: id, userId})

        if (!password) {
            return res.status(404).json({success: false, message: "Password not found"})
        }

        res.status(200).json({
            success: true,
            data: password
        })
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

// Update a password entry
export const updatePassword = async (req, res) => {
    try {
        const { id } = req.params
        const userId = req.user._id
        const { website, username, password } = req.body

        const passwordEntry = await Password.findOne({_id: id, userId})

        if (!passwordEntry) {
            return res.status(404).json({success: false, message: "Password not found"})
        }

        // Update fields
        if (website) passwordEntry.website = website
        if (username) passwordEntry.username = username
        if (password) passwordEntry.password = password

        await passwordEntry.save()

        res.status(200).json({
            success: true,
            message: "Password updated successfully",
            data: passwordEntry
        })
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

// Delete a password entry
export const deletePassword = async (req, res) => {
    try {
        const { id } = req.params
        const userId = req.user._id

        const passwordEntry = await Password.findOne({_id: id, userId})

        if (!passwordEntry) {
            return res.status(404).json({success: false, message: "Password not found"})
        }

        await Password.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Password deleted successfully"
        })
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

// Search passwords by website or username
export const searchPasswords = async (req, res) => {
    try {
        const userId = req.user._id
        const { query } = req.query

        if (!query) {
            return res.status(400).json({success: false, message: "Please provide search query"})
        }

        const passwords = await Password.find({
            userId,
            $or: [
                {website: {$regex: query, $options: 'i'}},
                {username: {$regex: query, $options: 'i'}}
            ]
        })

        res.status(200).json({
            success: true,
            data: passwords
        })
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}
