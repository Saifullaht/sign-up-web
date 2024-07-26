import { auth ,signInWithEmailAndPassword} from "./firebase.js";




const form = document.querySelector('#loginfrom');

form.addEventListener  ('submit', async (event) => {
try {
    event.preventDefault();
    const email = event.target.children[0].value;
    const password = event.target.children[1].value;
  await createUserWithEmailAndPassword(auth, email, password)
} catch (error) {
    console.log("my error msg" , error.message);
}
   

})