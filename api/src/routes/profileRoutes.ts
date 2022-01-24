import express from 'express';
import { FirebaseApp } from 'firebase/app';
import { addProfile, getProfile } from '../services/profileservice';
import { getFirestore } from 'firebase/firestore/lite';

export const profileRoutes = (firebase: FirebaseApp | undefined) => {
    // BaseUrl: /api/profiles
    const router = express.Router();
    const firestore = getFirestore(firebase);
    
    // Create new Profile
    router.post('/', async (req, res) => {
        try {
            const response = await addProfile(firestore, req.body);

            res.send(`Created profile with ID ${response.id}`);
        } catch (err) {
            res.send(`something went wrong while creating new profile.`);
        }
    });
    
    // Get profile with provided profileId
    router.get('/:profileId', async (req, res) => {
        try {
            const response = await getProfile(firestore, req.params.profileId);

            res.send(response);
        } catch (err) {
            res.send(`something went wrong while fetching profile with ID ${req.params.profileId}`);
        }
    });

    return router;
}
