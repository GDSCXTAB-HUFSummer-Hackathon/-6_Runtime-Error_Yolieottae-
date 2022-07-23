// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjXXH9WcS5fhHb_VKpMA5AZzkiLZT2xng",
  authDomain: "yolieottae.firebaseapp.com",
  projectId: "yolieottae",
  storageBucket: "yolieottae.appspot.com",
  messagingSenderId: "816233110943",
  appId: "1:816233110943:web:1403c61973683c7e0971aa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

const citiesRef = collection(firestore, "cities");

// export async function examWrite() {
//   await setDoc(doc(citiesRef, "SF"), {
//     name: "San Francisco",
//     state: "CA",
//     country: "USA",
//     capital: false,
//     population: 860000,
//     regions: ["west_coast", "norcal"],
//   });
//   await setDoc(doc(citiesRef, "LA"), {
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA",
//     capital: false,
//     population: 3900000,
//     regions: ["west_coast", "socal"],
//   });
//   await setDoc(doc(citiesRef, "DC"), {
//     name: "Washington, D.C.",
//     state: null,
//     country: "USA",
//     capital: true,
//     population: 680000,
//     regions: ["east_coast"],
//   });
//   await setDoc(doc(citiesRef, "TOK"), {
//     name: "Tokyo",
//     state: null,
//     country: "Japan",
//     capital: true,
//     population: 9000000,
//     regions: ["kanto", "honshu"],
//   });
//   await setDoc(doc(citiesRef, "BJ"), {
//     name: "Beijing",
//     state: null,
//     country: "China",
//     capital: true,
//     population: 21500000,
//     regions: ["jingjinji", "hebei"],
//   });
// }
