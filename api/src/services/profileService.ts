import { collection, doc, Firestore, addDoc, getDoc } from 'firebase/firestore/lite';
import { Profile } from '../models/Profile';

export const addProfile = async (firestore: Firestore, body: Profile) => {    
    const newProfileRef = collection(firestore, 'Profiles');

    try {
        return await addDoc(newProfileRef, body);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const getProfile = async (firestore: Firestore, profileId: string) => {    
    const docRef = doc(firestore, 'Profiles', profileId);

    try {
        const profileSnap = await getDoc(docRef);
        return profileSnap.data();
    } catch (err) {
        console.error(err);
        throw err;
    }
}