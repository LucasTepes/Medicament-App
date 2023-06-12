import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBL7sshgWQ1KbPAGNpCnYLfKlTiwFWX72c",
  authDomain: "medicamentos-app-66c7d.firebaseapp.com",
  projectId: "medicamentos-app-66c7d",
  storageBucket: "medicamentos-app-66c7d.appspot.com",
  messagingSenderId: "986709955042",
  appId: "1:986709955042:web:f14abd7df7f69fa2eca9bb",
  measurementId: "G-042E567DEB"
};
  
  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);

  export default firebase;