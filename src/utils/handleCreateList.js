import axios from "axios";

export const handleCreateList = async (e, listsUpdate, lists) => {
  e.preventDefault();
  console.log(lists);
  const url = "https://api.trello.com/1/lists/";
  if (!lists[0].idBoard) return;
  try {
    const response = await axios.post(
      url,
      {
        name: e.target.listName.value,
        idBoard: lists[0].idBoard,
      },
      {
        params: {
          key: import.meta.env.VITE_API_KEY,
          token: import.meta.env.VITE_API_TOKEN,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    listsUpdate((prevLists) => [...prevLists, response.data]);
  } catch (err) {
    console.log(err);
  }
};
