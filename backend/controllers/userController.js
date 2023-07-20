import asyncHandler from 'express-async-handler' ;
import User from '../models/userModel.js' ;

// @desc Auth user/set token
// @route POST /api/users
// @acess Public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Auth User' })
}) ;

// @desc Register a user
// @route POST /api/users
// @acess Public
const regUser = asyncHandler(async (req, res) => {
    const { fname, lname, email, password } = req.body ;
    const userExists = await User.findOne({email}) ;

    if(userExists) {
        res.status(400) ;
        throw new Error('User already exists. Please sign in.')
    }

    const user = await User.create({
        fname,
        lname,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            fname: user.fname,
            lname: user.lname,
            email: user.email
        }) ;
    } else {
        res.status(400) ;
        throw new Error('User data error')
    }
}) ;

// @desc Logout user
// @route POST /api/users/logout
// @acess Public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Logout User' })
}) ;

// @desc Get user profile
// @route GET /api/users/profile
// @acess Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get user Profile' })
}) ;

// @desc Update user profile
// @route PUT /api/users/profile
// @acess Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Update user Profile' })
}) ;


export {
    authUser,
    regUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
} ;