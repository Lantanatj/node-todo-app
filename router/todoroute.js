const express = require("express")
const router = express.Router()
const {createTodo, getAllTodos, singleTodo, updateTodo,deleteTodo, todedeleted} = require("../controller/todocontroller")

router.post('/todo', createTodo)
router.get('/todo', getAllTodos)
router.get('/todo/:id', singleTodo)
router.patch('/todo/:id', updateTodo)
router.delete('/todo/:id', deleteTodo)
// router.route('/').get(getAllTodos).post(createTodo)
// router.route('/:id').get(singleTodo).delete(deleteTodo).patch(updateTodo)

module.exports = router