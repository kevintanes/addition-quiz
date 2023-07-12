import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../Lib/init-firebase";

export const useFetchScore = () => {
    const [topScore, setTopScore] = useState([]);
    const getTopScore = async () => {
        try {
            let score = collection(db, "TopScore");
            const res = await getDocs(score);
            const topScore = res.docs.map((val) =>
                val.data().score
            ).sort((a, b) => b - a)
            setTopScore(topScore)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getTopScore()
    }, [])

    return { topScore, getTopScore }
}