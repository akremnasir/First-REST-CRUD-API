const express = require('express')
const router = express.Router()



const {getAllItems, getSingleItem, createItem, updateItem, deletItem} = require('../controller/itemsController')

router.get('/', getAllItems)
router.get('/:specItem', getSingleItem )
router.post('/createOne', createItem)
router.put('/:updateItem', updateItem)
router.delete('/:deletItem', deletItem)


module.exports =  router