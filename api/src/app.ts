import express from 'express';
import cors from 'cors';
import firebaseConfig from './config/firebase.config';
import { initializeApp } from 'firebase/app'
import { profileRoutes } from './routes';

// Remember to update Cloud Firestore security rules before interacting with DB

const app = express();
const PORT = 8000;

// Set up CORS
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
}
app.use(cors(options));

// Set up Json and UrlEncoded middleware (to accept POST and PUT bodies)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Routes (with baseUrl of /api)
app.use('/api/profiles', profileRoutes(firebaseApp));

// Begin listening
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
