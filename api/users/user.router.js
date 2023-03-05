const {
    createUser,
    getUsers,
    getUserById,
    updateUsers,
    deleteUser,
    login
} = require("./user.controller");
const { checkToken } = require("../../auth/token_validation");
const router = require("express").Router();

router.post("/", checkToken, createUser);
router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUserById);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);
router.post("/login", login);

module.exports = router;