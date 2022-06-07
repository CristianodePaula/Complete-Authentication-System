const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieSession = require("cookie-session")
const passport = require("passport")
const passportSetup = require("./passport/passport")
const authRoute = require("./route/auth")
const validateRoute = require("./route/validate")

const app = express()

dotenv.config()
app.use(express.json())

app.use(cookieSession({ 
	name: "session", 
	keys: ["devC"], maxAge: 24 * 60 * 60 * 1000
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({ 
	origin: "http://localhost:3000", 
	methods: "GET,POST,PUT,DELETE", 
	credentials: true 
}))

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(console.log("Conectado ao MongoDB"))
  .catch((err) => console.log(err))

app.use("/validate", validateRoute)
app.use("/auth", authRoute)

app.listen(process.env.PORT, () => {
  console.log("Servidor na porta especificada")
})