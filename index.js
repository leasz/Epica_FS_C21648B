// IMPORTAMOS EXPRESS, CORS, MORGAN
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


// IMPORTAMOS SEQUELIZE DESDE EL ARCHIVO DATABASE.JS
const { sequelize } = require('./database')

require('./src/models/forum.tables')

// HACEMOS UNA INSTANCIA DE EXPRESS
const app = express()

// MIDDLEWARES
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use(express.urlencoded( { extended:false } ))



app.set("views", __dirname + "/src/views")

// APUNTAMOS LA CARPETA PUBLIC A LAS RUTAS ESTATICAS PARA EXPRESS
//app.use(express.static('public'))
app.use(express.static('public'))

app.set("view engine", "ejs")



// FIJAMOS EL ARCHIVO DE RUTAS A UTILIZAR
app.use(require('./src/routes/forum.routes'))





// INICIADO EL SERVIDOR, IMPRIMOS EN CONSOLA
app.listen(3000, () => {
    // INICIAMOS PROCESO DE AUTENTICACION DE LA DB CON LA FUNCION FLECHA + PROMESA
    // CAMBIAMOS EL AUTHENTICATE POR EL .SYNC CREA LA TABLA SI LA MISMA NO EXISTE
    // {force:true}
    sequelize.sync()
    .then(() => console.log("DB is connected!"))
    .catch( err => console.log(err))

    console.log("Server on port 3000");
})

//app.get("/", (req,res) =>{
//    res.render("index");
//} )
