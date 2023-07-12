import axios from "axios";
import { useState } from "react";
import { DB_URL } from "../Helper";

export const useAddScore = () => {
    const [score, setScore] = useState(0);
    const addScore = async () => {
        try {
            let res = await axios.post(`${DB_URL}`, {
                score: score
            })
            console.log(`addScore`, res);
        } catch (error) {
            console.log(error);
        }
    }

    return { addScore }
}