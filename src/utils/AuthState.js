import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../firebase"

export const switchByIsSignIn = (resolve, reject) =>{
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    
    if(user) {
      // User Signed in
      console.log(user.uid);
      resolve(user.uid)
    } else {
      // User signed out
      reject()
    }
  })
}
