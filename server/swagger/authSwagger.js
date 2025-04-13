/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: "Register a new user"
 *     description: "Registers a new user with username, password, and role"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *               - role
 *             properties:
 *               username:
 *                 type: string
 *                 example: "Ahmed"
 *               password:
 *                 type: string
 *                 example: "123456"
 *               role:
 *                 type: string
 *                 example: "Developer"
 *     responses:
 *       200:
 *         description: "User registered successfully"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "User registered successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 4
 *                     username:
 *                       type: string
 *                       example: "Ahmed"
 *                     role:
 *                       type: string
 *                       example: "Developer"
 *       400:
 *         description: "Username already exists"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Username already exists"
 *                 errors:
 *                   type: object
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: "Internal server error"
 */


/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: "Login a user"
 *     description: "Authenticates a user based on username and password"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: "Ahmed"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: "Login successful"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Login successful"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     username:
 *                       type: string
 *                       example: "Ahmed"
 *                     role:
 *                       type: string
 *                       example: "Developer"
 *       400:
 *         description: "Invalid credentials"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Invalid credentials"
 *                 errors:
 *                   type: object
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: "Internal server error"
 */

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: "Logout a user"
 *     description: "Logs out the current user by clearing cookies"
 *     responses:
 *       200:
 *         description: "Logout successful"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Logout successful"
 *                 data:
 *                   type: object
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: "Internal server error"
 */


/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: "Get user data from token"
 *     description: "Retrieves the authenticated user's data from the provided token"
 *     responses:
 *       200:
 *         description: "Welcome message with user data"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Welcome"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     username:
 *                       type: string
 *                       example: "Ahmed"
 *                     role:
 *                       type: string
 *                       example: "Developer"
 *                     iat:
 *                       type: integer
 *                       example: 1744566769
 *                     exp:
 *                       type: integer
 *                       example: 1744570369
 *       401:
 *         description: "Unauthorized - No token provided"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "No token provided"
 *                 errors:
 *                   type: object
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: "Internal server error"
 */
