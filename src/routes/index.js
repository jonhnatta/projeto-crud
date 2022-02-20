
const router = require('express').Router()

const IndexController = require('../controllers/index')
const CustomersController = require('../controllers/customers')

//rotas
router.get('/', IndexController.index)

//register
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

//listar usuarios
router.get('/list', CustomersController.list)

//editar
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

//remover
router.get('/remove/:id',CustomersController.remove)

module.exports = router