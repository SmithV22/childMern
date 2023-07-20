import express from 'express' ;
const router = express.Router() ;
import { 
    authUser,
    regUser,
    logoutUser,
    getUserProfile,
    updateUserProfile, 
} from '../controllers/userController.js' ;

router.post('/', regUser) ;
router.post('/auth', authUser) ;
router.post('/logout', logoutUser) ;
router.route('/profile').get(getUserProfile).put(updateUserProfile) ;

export default router ;