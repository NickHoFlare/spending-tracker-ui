import express from 'express';
import cors from 'cors';
import firebaseConfig from './firestore/config';
import { initializeApp } from 'firebase/app'
import { getFirestore, setDoc, collection, getDoc, doc } from 'firebase/firestore/lite';

// Remember to update Cloud Firestore security rules before interacting with DB

const app = express();
const PORT = 8000;

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
}
app.use(cors(options));

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

app.get('/', async (req,res) => {
  const docRef = doc(firestore, 'spendless', 'test');
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    res.send(docSnap.data());
  } else {
    res.send('no such document exists');
  }
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
