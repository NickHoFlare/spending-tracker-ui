import express from 'express';
import firebaseConfig from './firestore/config';
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Remember to update Cloud Firestore security rules before interacting with DB
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const app = express();
const PORT = 8000;

app.get('/', (req,res) => {
  const testDoc = doc(firestore, 'test/test');
  
  const docData = {
    description: "Hello world!"
  }
  setDoc(testDoc, docData);
  
  res.send('Express + TypeScript Server');
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  console.log(firebaseConfig);
});
