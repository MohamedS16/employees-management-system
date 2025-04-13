/**
 * @swagger
 * /departments:
 *   post:
 *     summary: "Create a new department"
 *     description: "Creates a new department. Requires an authorization token."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "IT"
 *     responses:
 *       201:
 *         description: "Department created successfully"
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
 *                   example: "Department created successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 5
 *                     name:
 *                       type: string
 *                       example: "IT"
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

/**
 * @swagger
 * /departments:
 *   get:
 *     summary: "Get all departments"
 *     description: "Retrieves a list of all departments. Requires an authorization token."
 *     responses:
 *       200:
 *         description: "Departments retrieved successfully"
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
 *                   example: "Departments retrieved successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 2
 *                       name:
 *                         type: string
 *                         example: "IT"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-04-12T15:21:58.000Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-04-12T15:21:58.000Z"
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

/**
 * @swagger
 * /departments/{id}:
 *   put:
 *     summary: "Update an existing department"
 *     description: "Updates the department with the specified ID. Requires an authorization token."
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID of the department to update"
 *         schema:
 *           type: integer
 *           example: 2
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "FINANCE"
 *     responses:
 *       201:
 *         description: "Department updated successfully"
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
 *                   example: "Department updated successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 2
 *                     name:
 *                       type: string
 *                       example: "FINANCE"
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
 *       404:
 *         description: "Department not found"
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
 *                   example: "Department not found"
 *                 errors:
 *                   type: object
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: "Internal server error"
 */

/**
 * @swagger
 * /departments/{id}:
 *   delete:
 *     summary: "Delete a department"
 *     description: "Deletes the department with the specified ID. Requires an authorization token."
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID of the department to delete"
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       201:
 *         description: "Department deleted successfully"
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
 *                   example: "Department deleted successfully"
 *                 data:
 *                   type: object
 *                   nullable: true
 *                   example: null
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
 *       404:
 *         description: "Department not found"
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
 *                   example: "Department not found"
 *                 errors:
 *                   type: object
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: "Internal server error"
 */
  
