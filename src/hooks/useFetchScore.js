import axios from "axios";
import { useEffect, useState } from "react";
import { DB_URL } from "../Helper";

export const useFetchScore = () => {
    const [topScore, setTopScore] = useState([]);
    const getTopScore = async () => {
        try {
            let res = await axios.get(`${DB_URL}?_sort=score&_order=desc`)

            console.log("getTopScore", res.data);
            setTopScore(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getTopScore()
    }, [])


    return { topScore, getTopScore }
}


