// IMPORTAMOS ROUTER DESDE EXPRESS
const { Router } = require('express')

// IMPORTAMOS LAS FUNCIONES DEL CRUD DESDE EL ARCHIVO DE CONTROLADORES
const {
    listPost,
    findPost,
    createPost,
    updatePost,
    deletePost
    
} = require('../controllers/task.controllers')

// INSTANCIAMOS ROUTER
const router = Router()

// // RUTA INICIAL MENSAJE DE PRUEBA
// router.get('/', (req, res) => {
//     res.send("Hola Mundo");
// }
// )

// router.get('/test', (req, res) => {
//     res.send("Hola Mundo, desde /test");
// }
// )

// DECLARAMOS LAS ROUTAS Y LE PASAMOS LAS FUNCIONES QUE IMPORTAMOS
router.get('/foros/', listPost)
router.get('/foros/:id', findPost)
router.post('/foros/', createPost)
router.put('/foros/:id', updatePost)
router.delete('/foros/:id', deletePost)

// EXPORTAMOS EL OBJETO PARA PODER SER UTILIZADO
module.exports = router