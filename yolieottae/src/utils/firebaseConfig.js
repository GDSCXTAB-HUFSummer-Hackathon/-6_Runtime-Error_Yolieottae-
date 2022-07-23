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

function makeQuery() {
  const queryArr = [where(DOCUMENT_NAME_TITLE, "!=", null)];
  //   if (posTags != [])
  //     for (let i in posTags) {
  //       queryArr.push(where(DOCUMENT_NAME_TAGS + "." + posTags[i], "==", true));
  //     }
  //   if (negTags != [])
  //     for (let i in negTags) {
  //       queryArr.push(where(DOCUMENT_NAME_TAGS + "." + negTags[i], "==", null));
  //     }
  //   if (title != null && title != "") {
  //     queryArr.push(where(DOCUMENT_NAME_TITLE, ">=", title));
  //     queryArr.push(where(DOCUMENT_NAME_TITLE, "<=", title + "\uf8ff"));
  //   }
  //   if (content != null && content != "") {
  //     queryArr.push(where(DOCUMENT_NAME_CONTENT, ">=", content));
  //     queryArr.push(where(DOCUMENT_NAME_CONTENT, "<=", content + "\uf8ff"));
  //   }
  return queryArr;
}

export async function getRecipesData(
  onLoadHandler,
  posTags,
  negTags,
  title,
  content
) {
  //   const queryArr = makeQuery(posTags, negTags, title, content);
  const queryArr = makeQuery();
  const q = query(recipesRef, ...queryArr);
  const querySnapshot = await getDocs(q);

  let dataArr = querySnapshot.docs.map((doc) => {
    return doc.data();
  });

  dataArr = dataArr.filter((data) => {
    for (let i in posTags) {
      if (Object.keys(data.tags).includes(posTags[i]) === false) return false;
    }
    for (let i in negTags) {
      if (Object.keys(data.tags).includes(negTags[i]) === true) return false;
    }
    if (data.title.includes(title) == false) return false;

    return true;
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
