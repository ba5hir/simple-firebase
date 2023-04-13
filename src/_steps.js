/**
 *                    --------------
 *                    initial set up
 *                    --------------
 *
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. register app(create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. Danger: do not publish or make firebase config to public by pushing  to github !!
 *                      ----------------
 *                       integration
 *                       --------------
 * 7. Visit: Go to Docs > Build > Authentication > Web > Get Started
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx : import { getAuth } from "firebase/auth"
 * 10. create : const auth = getAuth(app)
 *                         --------------
 *                          provider setup
 *                         --------------
 * 11. import googleAuthProvider and create a new provider from google(web) : const provider = new GoogleAuthProvider();
 * 12. use signInWithPopUp and pass auth and provider
 * 13. active sign-in method (google, facebook, github ....)
 * 14. [vite] : change 127.0.0.1 to localhost
 *                          -----------------
 *                          More auth provider
 *                          -----------------
 * 1. active the auth provider (create app, provide redirect url, client id, client secret )
 *
 * **/
