const router = require("express").Router()
const User = require("../model/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

router.put("/:id", async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(); 
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, 
      },
    )
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(500).json(err)
  }
})
