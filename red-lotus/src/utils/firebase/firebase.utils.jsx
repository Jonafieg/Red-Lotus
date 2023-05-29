import {initializeApp} from 'firebase/app'
import { getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider }
    from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD9nozitOrnbJnwqk8f69f-Bn_aAAanewg",
    authDomain: "red-lotus-db.firebaseapp.com",
    projectId: "red-lotus-db",
    storageBucket: "red-lotus-db.appspot.com",
    messagingSenderId: "137728960310",
    appId: "1:137728960310:web:601a8ccf701a886d56b597"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
        prompt: 'select_account'
  })

  export const auth = getAuth()
  export const db = getFirestore()
  export const signInWithGooglePopup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userAuth = result.user; // Obtain the userAuth object from the result
      createUserDocumentFromAuth(userAuth); // Call the function with the userAuth object
    } catch (error) {
      console.log(error);
    }
  };


  export const createUserDocumentFromAuth = async (userAuth) => {
    if (userAuth) {
      const userDocRef = doc(db, 'users', userAuth.uid);
      console.log(userDocRef);
      const userDocSnap = await getDoc(userDocRef);
    }
  };