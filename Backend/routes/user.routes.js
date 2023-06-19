const express = require("express");
const router = express.Router();

const usercontroller = require("../controllers/user.controller");

const auth = require("../middleware/auth");
const user = require("../middleware/user.middleware");
const admin = require("../middleware/admin.middleware");

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - fname
 *         - lname
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         fname:
 *           type: string
 *           description: The first name of the user
 *         lname:
 *           type: string
 *           description: The last name of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         Active:
 *           type: boolean
 *           description: Proves whether user's account has been activated
 *         Token:
 *           type: string
 *           description: token issued after user signs up to help with authentication and authorization
 *       example:
 *         id: d5fE_asz5dHJKSI09ER
 *         fname: Teta
 *         lname: Lena
 *         email: tetalenaa@gmail.com
 *         password: teta2005
 *         Active: true
 *         token: MEY284ir_LxeRqW2Ec
 * tags:
 *   name: User
 *   description: The user registration api
 * /users/signup:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 * /users/login:
 *   post:
 *     summary: Login existing user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User is logged in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'

 * 
 * /users/verify/{id}/{token}:
 *   post:
 *      summary: Verifies a user
 *      tags: [User]
 *      produces: [application/json]
 *      parameters:
 *        - name: id
 *          in: path
 *          description: user auto-generated id
 *          type: string
 *          required: true
 *        - name: token
 *          in: path 
 *          description: user auto-generated token for verification
 *          type: string
 *          required: true
 *      responses:
 *         200:
             description: User validated successfully
           400:
 *         description: Bad request
           404:
 *         description: Not found
          500:
 *         description: Some server error
 
 */

router.post("/signup", usercontroller.createUser);

router.post("/login", usercontroller.login);

// auth("manageUsers")
router.get("/all", auth, admin, usercontroller.getUsers);
router.get("/profile", auth, usercontroller.getUserProfile);

module.exports = router;
