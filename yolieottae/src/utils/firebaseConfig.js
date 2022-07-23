// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const COLLECTION_NAME_RECIPES = "recipes";
const DOCUMENT_NAME_ID = "id";
const DOCUMENT_NAME_CONTENT = "content";
const DOCUMENT_NAME_TAGS = "tags";
const DOCUMENT_NAME_THUMBNAIL = "thumbnail";
const DOCUMENT_NAME_TITLE = "title";
const DOCUMENT_NAME_UPLOADTIME = "uploadTime";

const QUERY_OP_ARRAY_CONTAINS_ANY = "array-contains-any";
const QUERY_OP_ARRAY_CONTAINS = "array-contains";

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

const recipesRef = collection(firestore, COLLECTION_NAME_RECIPES);

function makeQuery(posTags, negTags, title, content) {
  const queryArr = [];
  for (let i in posTags) {
    queryArr.push(where(DOCUMENT_NAME_TAGS + "." + posTags[i], "==", true));
  }
  for (let i in negTags) {
    queryArr.push(where(DOCUMENT_NAME_TAGS + "." + negTags[i], "==", null));
  }
  if (title != null) queryArr.push(where(DOCUMENT_NAME_TITLE, "==", title));
  if (content != null) queryArr.push(where(DOCUMENT_NAME_TITLE, "==", content));
  return queryArr;
}

export async function getRecipesData(
  onLoadHandler,
  posTags,
  negTags,
  title,
  content
) {
  //   const q = query(recipesRef, ...makeQuery(["김치", "마늘"]));
  const queryArr = makeQuery(posTags, negTags, title, content);
  const q = query(recipesRef, ...queryArr);

  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => {
    return doc.data();
  });
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, "array-contains-any", doc.data());
  //     onLoadHandler();
  //   });
  onLoadHandler(dataArr);
}

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
