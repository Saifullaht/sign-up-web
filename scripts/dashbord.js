import { auth, signOut } from "./firebase.js"
const btn = document.querySelector("#logout_btn");

btn.addEventListener("click", async() => {
try {
    await signOut(auth)
    console.log("  Sign-out successful ");
} catch (error) {
   
}
    
 
})