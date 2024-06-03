// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnTDwgmQDRBhROZ7UNzpR14pANDEJi-Os",
  authDomain: "cars-a800b.firebaseapp.com",
  projectId: "cars-a800b",
  storageBucket: "cars-a800b.appspot.com",
  messagingSenderId: "666903155855",
  appId: "1:666903155855:web:abe6811aa126058ca24cfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
const auth = getAuth(app);

// Export collections
export const categoryCollection = collection(db, "categories");
export const productsCollection = collection(db, "products");
export const ordersCollection = collection(db, "orders");
export const storage = getStorage(app);

const provider = new GoogleAuthProvider();
export const signIn = () => signInWithPopup(auth, provider);
export const signOff = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

export const onCategoriesLoad = (callback) =>
  onSnapshot(categoryCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );

export const onProductsLoad = (callback) =>
  onSnapshot(productsCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );

export const onOrdersLoad = (callback) =>
  onSnapshot(ordersCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );

// отправка фотографии и получение ее url
export const uploadProductPhoto = (file) => {
  const storageRef = ref(storage, `products/${file.name}`);
  return uploadBytes(storageRef, file)
    .then(() => {
      return getDownloadURL(storageRef);
    })
    .catch((error) => {
      console.log("Failed to upload product photo:", error);
    });
};