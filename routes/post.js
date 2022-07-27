// External requires
const express = require("express");

// Importing middlewares
const multer = require("../middleware/multer-config");

// Importing methods for post
const {createPost} = require("../controllers/post/create");
const {readPost, readOnePost} = require("../controllers/post/read");
const {updatePost} = require("../controllers/post/update");
const {deletePost} = require("../controllers/post/delete");
const {likePost} = require("../controllers/post/like");


// Creating express Router
const router = express.Router();

// Routing for sauces
router.post("/", multer, createPost);
router.get("/", readPost);
router.get("/:id", readOnePost);
router.put("/:id", multer, updatePost);
router.delete("/:id", multer, deletePost);
router.post("/:id/like", likePost);

module.exports = router;
