import { useEffect } from "react";
import axios from "axios";

export const fetchLists = (id, setLists) => {
  const fetchData = async () => {
    if (!id) return;
    try {
      let url = `https://api.trello.com/1/members/me/boards?fields=${id},url&key=${
        import.meta.env.VITE_API_KEY
      }&token=${import.meta.env.VITE_API_TOKEN}`;
      const res = await axios.get(url);
      setLists((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Error fetching lists:", error);
    }
  };

  fetchData();

  return null;
};
