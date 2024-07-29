import { auth, signOut , onAuthStateChanged } from "./firebase.js"
const btn = document.querySelector("#logout_btn");
const useremail = document.querySelector("#user_email");

onAuthStateChanged(auth, (user) => {
    if (user) {
        // console.log(user);
        useremail.innerText = user.email
        const uid = user.uid;
    } else {
        window.location.href = "./login.html"; 

    // console.log("User is signed out");
    }
  });


btn.addEventListener("click", async() => {
try {
    await signOut(auth)
    console.log("  Sign-out successful ");
} catch (error) {
   
}
    
 
})
