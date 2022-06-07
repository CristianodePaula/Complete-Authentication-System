const GoogleStrategy = require("passport-google-oauth20").Strategy
const FacebookStrategy = require("passport-facebook").Strategy
const GithubStrategy = require("passport-github2").Strategy
const passport = require("passport")

const GOOGLE_CLIENT_ID ="your id"
const GOOGLE_CLIENT_SECRET = "your id secret"

const FACEBOOK_APP_ID = "your id"
const FACEBOOK_APP_SECRET = "your id secret"

const GITHUB_CLIENT_ID = "your id"
const GITHUB_CLIENT_SECRET = "your id secret"


  passport.use(
    new GoogleStrategy( 
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      function ( accessToken, refreshToken, profile, done) {  
        done(null, profile)
      }
    )
  )

  passport.use(
    new GithubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  )

  passport.use(
    new FacebookStrategy(
      {
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile)
      }
    )
  )

  passport.serializeUser((user, done) => {
    done(null, user)
  })
  
  passport.deserializeUser((user, done) => {
    done(null, user)
  })