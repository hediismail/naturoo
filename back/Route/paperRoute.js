const express = require ('express')
const router = express.Router()
const paper = require ('../Controller/paperController')


router.post('/add', paper.addPaper)
router.get('/get', paper.getPaper)
router.delete('/:id', paper.deletePaper)
router.put('/:id', paper.updatePaper)
router.get("/:id", paper.getPaperDetail);

module.exports = router