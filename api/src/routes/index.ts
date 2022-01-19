import express from 'express';
import { FirebaseApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore/lite';

const apiRouter = (firebase: FirebaseApp | undefined) => {
    const router = express.Router();
    const firestore = getFirestore(firebase);

    router.get('/', async function (req, res) {
        const docRef = doc(firestore, 'spendless', 'test');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            res.send(docSnap.data());
        } else {
            res.send('no such document exists');
        }
    });

    return router;
}

export default apiRouter;