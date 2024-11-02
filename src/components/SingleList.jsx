import React from "react";
import {
  ButtonBase,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import { fetchCards } from "../utils/fetchCards";
import SingleCard from "./SingleCard";
import { addNewCard } from "../utils/addNewCard";
const SingleList = ({ list }) => {
  const [cards, setCards] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  useEffect(() => {
    fetchCards(list.id, setCards);
  }, [list.id]);

  return (
    <Box sx={{ position: "relative", height: "auto", marginBottom: "10rem" }}>
      <Card
        id={list.id}
        key={list.id}
        sx={{
          width: "20rem",
          height: "auto",
          zIndex: -10,
          color: "gray",
          marginRight: "0.5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Typography sx={{ zIndex: 1 }}>{list.name}</Typography>
          {cards.map((card) => (
            <SingleCard card={card} />
          ))}
        </CardContent>
        {!isAdding && (
          <ButtonBase
            sx={{
              width: "80%",
              border: "1px solid gray",
              marginTop: "1rem",
              paddingY: "0.5rem",
              borderRadius: "5px",
              cursor: "pointer",
              paddingLeft: "2px",

              fontSize: "1rem",
              marginY: "1rem",
              marginX: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setIsAdding(true);
            }}
          >
            Add Card
          </ButtonBase>
        )}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          {isAdding && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(e.target.cardName.value);
                addNewCard(e.target.cardName.value, list.id, setCards);
                setIsAdding(false);
              }}
            >
              <TextField
                sx={{
                  width: "80%",
                  height: "auto",
                  marginBottom: "0.5rem",
                  backgroundColor: "white",
                }}
                name="cardName"
                type="text"
                placeholder="Enter Card Name"
                variant="outlined"
              />
              <Button
                sx={{
                  width: "auto",
                  height: "2rem",
                  backgroundColor: "black",
                  marginTop: "1rem",
                }}
                type="submit"
                variant="contained"
              >
                Add Card
              </Button>
            </form>
          )}

          {isAdding && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setIsAdding(false);
              }}
              type="button"
              sx={{
                position: "absolute",
                top: "5rem",
                left: "13rem",
                color: "black",
                zIndex: 100,
              }}
            >
              x
            </Button>
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default SingleList;
