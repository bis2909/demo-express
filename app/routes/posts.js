const express = require('express');
const router = express.Router();

const postControllers = require('@app/controllers/posts');
const { create, update } = require('@app/middleware/posts');

router.get('/', postControllers.index);
router.post('/', create, postControllers.create);
router.get('/:id', postControllers.detail);
router.patch('/:id', update, postControllers.update);
router.delete('/:id', postControllers.destroy);

module.exports = router;
