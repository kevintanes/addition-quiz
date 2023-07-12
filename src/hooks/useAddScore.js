import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../Lib/init-firebase";

export const useAddScore = () => {
    const [score, setScore] = useState(0);
    const addScore = async () => {
        try {
            const collectionScore = collection(db, "TopScore");
            await addDoc(collectionScore, { score: score })
        } catch (error) {
            console.log(error);
        }
    }

    return { addScore, setScore, score }
}