const express = require('express')
const router = express.Router()

const studentsController = require('../../controllers/studentsController')

router
.route('/')
.get(studentsController.getAllStuednts)
.post(studentsController.createNewStudent)
.put(studentsController.updateStudent)
.delete(studentsController.deleteStudent)

router.route('/:id').get()


module.exports = router