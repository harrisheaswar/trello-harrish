import axios from "axios";

export const handleCreateBoard = async (e, boardsUpdate) => {
  e.preventDefault();

  const url = "https://api.trello.com/1/boards/";

  try {
    const response = await axios.post(
      url,
      {
        name: e.target.boardName.value,
        defaultLabels: true,
        defaultLists: true,
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

    boardsUpdate((prevBoards) => [...prevBoards, response.data]);
  } catch (err) {
    console.log(err);
  }
};
