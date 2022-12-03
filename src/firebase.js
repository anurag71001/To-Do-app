import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
  
  const firebaseApp = firebase.initializeApp(
    {
      apiKey: "AIzaSyAb_MA9YZ7Yw8EvHht0FKZbPkxaVmhTJIU",
      authDomain: "todo-app-47a53.firebaseapp.com",
      projectId: "todo-app-47a53",
      storageBucket: "todo-app-47a53.appspot.com",
      messagingSenderId: "885074070031",
      appId: "1:885074070031:web:19947e3fc3e20009c7b17a",
      measurementId: "G-S609XSE8QQ",
    }
  );
const db = firebaseApp.firestore();

export default db;