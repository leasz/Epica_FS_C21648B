// IMPORTAMOS ROUTER DESDE EXPRESS
const { Router } = require('express')

// IMPORTAMOS LAS FUNCIONES DEL CRUD DESDE EL ARCHIVO DE CONTROLADORES
const {
    newPost,
    listPost,
    findPost,
    createPost,
    updatePost,
    deletePost
    
} = require('../controllers/posts.controllers')

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
router.post('/foros/createpost', newPost)
router.get('/foros/new', createPost)
router.get('/foros/', listPost)
router.get('/foros/:id', findPost)
router.put('/foros/:id', updatePost)
router.delete('/foros/:id', deletePost)

// EXPORTAMOS EL OBJETO PARA PODER SER UTILIZADO
module.exports = router