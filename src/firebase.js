
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyALpvA44Rtz5-hVAoKCGbr1y0aH8dmQjgo",
  authDomain: "netflix-clone-a40b0.firebaseapp.com",
  projectId: "netflix-clone-a40b0",
  storageBucket: "netflix-clone-a40b0.firebasestorage.app",
  messagingSenderId: "836701266614",
  appId: "1:836701266614:web:3523e23ea63245c04bbc17"
};

const app = initializeApp(firebaseConfig);

const auth =getAuth(app)

const db =getFirestore(app)

const signup = async (name,email,password)=>{
try{
const res = await createUserWithEmailAndPassword(auth,email,password)
const user =res.user;
await addDoc(collection(db,'user'),{
    uid:user.uid,
    name,
    authProvider:'local',
    email,
})
}catch(error){
   console.log(error)
toast.error(error.code.split('/')[1].split('-').join(' '))
}
}

const login = async(email, password)=>{
try{
  await signInWithEmailAndPassword(auth,email,password)
}catch(error){
  console.log(error)
toast.error(error.code.split('/')[1].split('-').join(' '))
}
}

const logout = ()=>{
    signOut(auth)
}


export {auth,db,login,signup,signOut,logout}