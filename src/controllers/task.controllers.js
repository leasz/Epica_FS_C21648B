const { PostModel } = require('../models/Task')
const { param } = require('../routes/task.routes')

// CREAMOS FUNCION PARA LISTAR LOS POSTEOS
async function listPost(req,res){
    const allPosts = await PostModel.findAll()
    res.json(allPosts)
}

// CREAMOS FUNCION PARA BUSCAR POSTEO POR ID
async function findPost(req,res){
    const id = req.params.id
    const post = await PostModel.findByPk(id)
    res.send(post)
}

// CREAMOS FUNCION PARA CREAR UN NUEVO POST
async function createPost(req,res){
    const { author, tittle, content} = req.body
    await PostModel.create({ author, tittle, content})
    res.send('Crear Post')
}

// CREAMOS FUNCION PARA ACTUALIZAR UN POST
async function updatePost(req,res){
    const id = req.params.id
    const { author, tittle, content } = req.body
    await PostModel.update({ author, tittle, content }, {
        where : {
            id
        }
    })
    res.send('Post editado')
}

async function deletePost(req,res){
    const id = req.params.id
    await PostModel.destroy({
        where: {
            id
        }
    })
    res.send('Post eliminado')
}

module.exports = {
    listPost,
    findPost,
    createPost,
    updatePost,
    deletePost
}