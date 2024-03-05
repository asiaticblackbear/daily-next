import { initializeApp, getApp, getApps } from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const app = getApps().length > 0 ? getApp() : initializeApp({
    apiKey: process.env.GOOGLE_PUBLIC_API_KEY,
    authDomain: process.env.GOOGLE_PUBLIC_AUTO_DOMAIN,
    projectId: process.env.GOOGLE_PUBLIC_PROJECT_ID,
    storageBucket: process.env.GOOGLE_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.GOOGLE_PUBLIC_MESSAGEING_SENDER_ID,
    appId: process.env.GOOGLE_PUBLIC_APP_ID,
    measurementId: process.env.GOOGLE_PUBLIC_MEASUREMENT_ID,
})

export const auth = getAuth(app)
export const store = getFirestore(app)

