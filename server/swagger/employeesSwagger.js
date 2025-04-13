
/**
 * @swagger
 * /employees:
 *   get:
 *     summary: "Get all employees"
 *     description: "Retrieves a list of all employees. Requires an authorization token."
 *     responses:
 *       200:
 *         description: "Employees retrieved successfully"
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
 *                   example: "Employees retrieved successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 2
 *                       firstName:
 *                         type: string
 *                         example: "Ahmed"
 *                       lastName:
 *                         type: string
 *                         example: "Sameh"
 *                       email:
 *                         type: string
 *                         example: "a@gmail.com"
 *                       hireDate:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-01-01T00:00:00.000Z"
 *                       salary:
 *                         type: number
 *                         example: 2000
 *                       departmentId:
 *                         type: integer
 *                         example: 3
 *                       department:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 3
 *                           name:
 *                             type: string
 *                             example: "Marketing"
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2025-04-13T13:46:53.000Z"
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2025-04-13T14:26:17.000Z"
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
 * /employees:
 *   post:
 *     summary: "Create a new employee"
 *     description: "Creates a new employee record. Requires an authorization token."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "Mohamed"
 *               lastName:
 *                 type: string
 *                 example: "Sameh"
 *               email:
 *                 type: string
 *                 example: "mb@gmail.com"
 *               departmentId:
 *                 type: integer
 *                 example: 2
 *               hireDate:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-01"
 *               salary:
 *                 type: number
 *                 example: 1000
 *     responses:
 *       201:
 *         description: "Employee created successfully"
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
 *                   example: "Employee created successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 6
 *                     firstName:
 *                       type: string
 *                       example: "Mohamed"
 *                     lastName:
 *                       type: string
 *                       example: "Sameh"
 *                     email:
 *                       type: string
 *                       example: "mbx@gmail.com"
 *                     departmentId:
 *                       type: integer
 *                       example: 3
 *                     hireDate:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-01-01T00:00:00.000Z"
 *                     salary:
 *                       type: number
 *                       example: 1000
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
 *       400:
 *         description: "Bad request - Email already exists"
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
 *                   example: "Email already exists"
 *                 errors:
 *                   type: object
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: "Internal server error"
 */

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: "Get an employee by ID"
 *     description: "Retrieves the details of an employee by their ID. Requires an authorization token."
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "The ID of the employee to retrieve"
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       200:
 *         description: "Employee retrieved successfully"
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
 *                   example: "Employee retrieved successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 2
 *                     firstName:
 *                       type: string
 *                       example: "Ahmed"
 *                     lastName:
 *                       type: string
 *                       example: "Sameh"
 *                     email:
 *                       type: string
 *                       example: "a@gmail.com"
 *                     hireDate:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-01-01T00:00:00.000Z"
 *                     salary:
 *                       type: number
 *                       example: 2000
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-04-13T14:54:46.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-04-13T14:54:46.000Z"
 *                     departmentId:
 *                       type: integer
 *                       example: 3
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
 *         description: "Employee not found"
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
 *                   example: "Employee not found"
 *                 errors:
 *                   type: object
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: "Internal server error"
 */

/**
 * @swagger
 * /employees/{id}:
 *   put:
 *     summary: "Update an employee by ID"
 *     description: "Updates the details of an employee by their ID. Requires an authorization token."
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "The ID of the employee to update"
 *         schema:
 *           type: integer
 *           example: 2
 *       - in: body
 *         name: employee
 *         required: true
 *         description: "Employee details to be updated"
 *         schema:
 *           type: object
 *           properties:
 *             firstName:
 *               type: string
 *               example: "Mohamed"
 *             lastName:
 *               type: string
 *               example: "Sameh"
 *             email:
 *               type: string
 *               example: "m@gmail.com"
 *             hireDate:
 *               type: string
 *               format: date
 *               example: "2024-01-01"
 *             salary:
 *               type: string
 *               example: "2000"
 *             departmentId:
 *               type: integer
 *               example: 2
 *     responses:
 *       200:
 *         description: "Employee updated successfully"
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
 *                   example: "Employee updated successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 2
 *                     firstName:
 *                       type: string
 *                       example: "Mohamed"
 *                     lastName:
 *                       type: string
 *                       example: "Sameh"
 *                     email:
 *                       type: string
 *                       example: "mbm@gmail.com"
 *                     hireDate:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-01-01T00:00:00.000Z"
 *                     salary:
 *                       type: number
 *                       example: "2000"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-04-13T14:54:46.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-04-13T18:23:57.252Z"
 *                     departmentId:
 *                       type: integer
 *                       example: 3
 *       400:
 *         description: "Bad request - Email already exists"
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
 *                   example: "Email already exists"
 *                 errors:
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

/**
 * @swagger
 * /employees/{id}:
 *   delete:
 *     summary: "Delete an employee by ID"
 *     description: "Deletes an employee from the system by their ID. Requires an authorization token."
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "The ID of the employee to delete"
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       200:
 *         description: "Employee deleted successfully"
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
 *                   example: "Employee deleted successfully"
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
 *         description: "Employee not found"
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
 *                   example: "Employee not found"
 *                 errors:
 *                   type: object
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: "Internal server error"
 */

/**
 * @swagger
 * /employees/count:
 *   get:
 *     summary: "Get the total number of employees"
 *     description: "Retrieves the total count of employees in the system. Requires an authorization token."
 *     responses:
 *       200:
 *         description: "Successfully retrieved the employee count"
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
 *                   example: "Employees retrieved successfully"
 *                 data:
 *                   type: integer
 *                   example: 3  # Example count of employees
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
 * /employees/newHires:
 *   get:
 *     summary: "Get the latest 3 employees based on their creation date"
 *     description: "Retrieves the three most recently added employees, ordered by their `createdAt` timestamp. Requires an authorization token."
 *     responses:
 *       200:
 *         description: "Successfully retrieved the latest 3 employees"
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
 *                   example: "Employees retrieved successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 6
 *                       firstName:
 *                         type: string
 *                         example: "Mohamed"
 *                       lastName:
 *                         type: string
 *                         example: "Sameh"
 *                       email:
 *                         type: string
 *                         example: "mbx@gmail.com"
 *                       hireDate:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-01-01T00:00:00.000Z"
 *                       salary:
 *                         type: integer
 *                         example: 1000
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-04-13T18:18:22.000Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-04-13T18:18:22.000Z"
 *                       departmentId:
 *                         type: integer
 *                         example: 3
 *                       department:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 3
 *                           name:
 *                             type: string
 *                             example: "Marketing"
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
