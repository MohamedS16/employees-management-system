const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticate = require('../middleware/authMiddleware');
/** 
@swagger
 * /register:
 *   post:
 *     summary: "Register new system user"
 *     description: "Register new system user, only current users can register new users, there is a seeder that creates the first user"
 *     responses:
 *       200: 
 *         description: "User registered successfully"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                     example: ahmed
 *                   password:
 *                     type: string
 *                     example: "123456"
 *                   role:
 *                     type: string
 *                     example: "admin"
 */

router.post('/register', authController.register);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

router.get('/me', authenticate, authController.me);

module.exports = router;
