"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const remolque_1 = require("../controllers/remolque");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", remolque_1.getItems);
router.get("/:id", remolque_1.getItem);
router.post("/", remolque_1.postItem);
router.put("/:id", remolque_1.updateItem);
router.delete("/:id", remolque_1.deleteItem);
