const { PostModel } = require('../models/forum.tables')

// CREAMOS FUNCION PARA LISTAR LOS POSTEOS
async function listPost(req,res){
    const allPosts = await PostModel.findAll()
    res.render("index", { allPosts })
}

// CREAMOS FUNCION PARA BUSCAR POSTEO POR ID
async function findPost(req,res){
    const id = req.params.id
    const post_id = await PostModel.findByPk(id)
    res.render("index", { post_id })
}

// CREAMOS FUNCION PARA IR AL FORMULARIO DE CREACION DE NUEVO POST
async function createPost(req,res){
    //const { author, tittle, content} = req.body
    //await PostModel.create({ author, title, content})
    res.render("new")
    }

// FUNCION QUE CREA UN NUEVO VALOR EN LA DB OBTENIENDO LOS DATOS DESDE EL REQ.BODY
    const newPost = async (req,res) => {
    const { author, title, content, imgURL  } = req.body
    console.log(req.body)
    await PostModel.create( { author, title, content, imgURL } )
    console.log( { author, title, content, imgURL } )
    res.redirect('/foros')
    }

// CREAMOS FUNCION PARA ACTUALIZAR UN POST
async function updatePost(req,res){
    const id = req.params.id
    const { author, title, content, imgURL } = req.body
    await PostModel.update({ author, title, content, imgURL }, {
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
    newPost,
    listPost,
    findPost,
    createPost,
    updatePost,
    deletePost
}