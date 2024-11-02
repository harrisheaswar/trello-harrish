import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import SingleChecklist from "./SingleChecklist";
import { fetchCheckLists } from "../utils/fetchCheckLists";
import { useEffect } from "react";
const SingleCard = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkLists, setCheckLists] = useState([]);

  useEffect(() => {
    fetchCheckLists(card.id, setCheckLists);
  }, [card.id]);

  const handleOpenDialog = () => {
    setIsOpen(true);
    fetchCheckLists(card.id, setCheckLists);
  };
  const handleCloseDialog = () => setIsOpen(false);
  return (
    <>
      <Box onClick={handleOpenDialog}>
        <Card
          id={card.id}
          key={card.id}
          sx={{
            width: "100%",
            height: "auto",
            fontSize: "1.2rem",
            marginY: "0.5rem",
            boxShadow: "inset 0 0 3.5px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
          }}
        >
          <CardContent>
            <Typography>{card.name}</Typography>
          </CardContent>
        </Card>
      </Box>
      <Dialog open={isOpen}>
        <DialogTitle>{card.name}</DialogTitle>
        <DialogContent sx={{ width: "600px", height: "1000px" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "50%", height: "auto" }}>
              {checkLists.map((checklist) => (
                <SingleChecklist checklist={checklist} />
              ))}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SingleCard;
