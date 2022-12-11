import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
  orderBy,
  limit,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcLgfYoCOasVlQWiXxYhYAW9QBPD2ofVY",
  authDomain: "react-monte.firebaseapp.com",
  projectId: "react-monte",
  storageBucket: "react-monte.appspot.com",
  messagingSenderId: "206638327146",
  appId: "1:206638327146:web:a616041755d7bee772f113"
};

const app = initializeApp(firebaseConfig);

// 0. Inicializamos Firestore
const DB = getFirestore(app);

//1. Traer todos los documentos
export default async function getItems() {
  //1.A Referenciamos nuestra colección
  const colectionProductsRef = collection(DB, "products");
  //1.B Solicitamos todos los documentos de la colección
  const documentSnapshot = await getDocs(colectionProductsRef);

  const documentsData = documentSnapshot.docs.map((doc) => {

    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return documentsData;
}

export async function getItemsOrdered() {
  const colectionProductsRef = collection(DB, "products");
  const q = query(colectionProductsRef, orderBy("index"), limit(10));

  const documentSnapshot = await getDocs(q);

  const documentsData = documentSnapshot.docs.map((doc) => {

    return {
      ...doc.data(),
      id: doc.id,
    };
  });
 
  return documentsData;
}

export async function getSingleItem(idParams) {
  const docRef = doc(DB, "products", idParams);

  const docSnapshot = await getDoc(docRef);

  const itemData = docSnapshot.data();
  itemData.id = docSnapshot.id;

  return itemData;
}

export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "products");

  const queryCat = query(
    collectionRef,
    where("category", "==", categoryParams)
  );

  const documentSnapshot = await getDocs(queryCat);

  const documentsData = documentSnapshot.docs.map((doc) => {

    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return documentsData;
}

export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");

  const docOrder = await addDoc(collectionRef, order);

  return docOrder.id;
}

async function exportArrayToFirestore() {
  const products = [
    
    {
      id: 1,
      title: "Commander: Aura of Courage",
      price: 15999,
      stock: 5,
      category: "Mazos",
      imgurl: "https://acortar.link/r65nql",
      description: "",
    },
    {
      id: 2,
      title: "Commander: Draconic Rage",
      description:
        "",
      price: 15999,
      stock: 5,
      category: "materialsellado",
      imgurl: "https://acortar.link/gAMZcz",
    },

    {
        id: 3,
        title: "Commander: Dungeons of Death",
        description:
          "",
        price: 15999,
        stock: 5,
        category: "materialsellado",
        imgurl: "https://acortar.link/Y57xk8",
      },

      {
        id: 4,
        title: "Commander: Planar Portal ",
        description:
          "",
        price: 15999,
        stock: 5,
        category: "materialsellado",
        imgurl: "https://acortar.link/P6GlvH",
      },

      {
        id: 5,
        title: "Folios Dragon Shield: Black",
        description:
          "",
        price: 4999,
        stock: 34,
        category: "accesorios",
        imgurl: "https://acortar.link/8qmhYr",
      },

      {
        id: 6,
        title: "Folios Dragon Shield: Eucalyptus",
        description:
          "",
        price: 4999,
        stock: 34,
        category: "accesorios",
        imgurl: "https://acortar.link/zM8XDe",
      },

      {
        id: 7,
        title: "Folios Dragon Shield: Apple Green",
        description:
          "",
        price: 4999,
        stock: 34,
        category: "accesorios",
        imgurl: "https://acortar.link/nBUOUu",
      },

      {
        id: 8,
        title: "Folios Dragon Shield: Perfect Fit",
        description:
          "",
        price: 4499,
        stock: 34,
        category: "accesorios",
        imgurl: "https://acortar.link/HeiHus",
      },

      {
        id: 9,
        title: "Caja Draft: Commander Legends",
        description:
          "",
        price: 54999,
        stock: 34,
        category: "materialsellado",
        imgurl: "https://acortar.link/6C5D9N",
      },

      {
        id: 10,
        title: "Caja Draft: Dominaria United",
        description:
          "",
        price: 54999,
        stock: 34,
        category: "materialsellado",
        imgurl: "https://acortar.link/p5slu1",
      },

      {
        id: 11,
        title: "Caja Draft: Double Masters",
        description:
          "",
        price: 54999,
        stock: 34,
        category: "materialsellado",
        imgurl: "https://acortar.link/pb6IGy",
      },

      {
        id: 12,
        title: "Caja Draft: Crimson Vow",
        description:
          "",
        price: 54999,
        stock: 34,
        category: "materialsellado",
        imgurl: "https://acortar.link/tX6nbZ",
      },
    
  ];

  const collectionRef = collection(DB, "products");

  for (let item of products) {
    item.index = item.id;
    delete item.id;
    let docOrder = await addDoc(collectionRef, item);
    console.log("Documento creado, id:", docOrder.id);
  }
}