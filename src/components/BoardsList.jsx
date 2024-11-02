import React from "react";
import {
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { fetchLists } from "../utils/fetchLists";
import Image1 from "../assets/Image-1.webp";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { handleCreateBoard } from "../utils/handleCreateBoard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const BoardsList = ({ boardsUpdate, boards, setLists, lists }) => {
  const navigate = useNavigate();
  const [boardId, setBoardId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!boardId) return;
      try {
        const url = `https://api.trello.com/1/boards/${boardId}/lists?key=${
          import.meta.env.VITE_API_KEY
        }&token=${import.meta.env.VITE_API_TOKEN}`;
        const res = await axios.get(url);
        setLists(res.data);
        navigate(`/boards/${boardId}`);
      } catch (error) {
        console.error("Error fetching lists:", error);
      }
    };

    fetchData();
  }, [boardId, lists]);

  return (
    <div className="flex flex-row w-auto h-auto min-h-[10rem]">
      <Card
        sx={{
          backgroundColor: "lightBlue",
          width: "20rem",
          height: "auto",
          textAlign: "center",
          marginRight: "0.5rem",
          color: "white",
        }}
      >
        <CardContent>
          <Typography sx={{ color: "black" }}>Create Board</Typography>
        </CardContent>
        <form onSubmit={(e) => handleCreateBoard(e, boardsUpdate)}>
          <TextField
            sx={{
              width: "80%",
              height: "auto",
              color: "white",
              marginBottom: "0.5rem",
              backgroundColor: "white",
              zIndex: 5,
            }}
            name="boardName"
            type="text"
            placeholder="Enter Board Name"
            variant="outlined"
          />
          <Button
            sx={{
              width: "auto",
              height: "2rem",
              textSize: "1rem",
              backgroundColor: "black",
              marginTop: "1rem",
            }}
            type="submit"
            variant="contained"
          >
            Add Board
          </Button>
        </form>
      </Card>

      {boards.map((board) => (
        <ButtonBase
          id={board.id}
          key={board.id}
          sx={{ marginTop: "2rem" }}
          onClick={(e) => {
            e.preventDefault();
            setBoardId(board.id);
          }}
        >
          <Card
            sx={{
              width: "20rem",
              height: "8rem",
              zIndex: -10,
              position: "relative",
              color: "white",
              marginRight: "0.5rem",
            }}
          >
            <CardContent sx={{ width: "auto", height: "auto" }}>
              <CardMedia
                component={"img"}
                image={Image1}
                sx={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              />
              <Typography sx={{ position: "relative", zIndex: 1 }}>
                {board.name}
              </Typography>
            </CardContent>
          </Card>
        </ButtonBase>
      ))}
    </div>
  );
};
export default BoardsList;
