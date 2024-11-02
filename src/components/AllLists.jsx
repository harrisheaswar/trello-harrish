import React from "react";
import {
  ButtonBase,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import { handleCreateList } from "../utils/handleCreateList";
import SingleList from "./SingleList";

const AllLists = ({ lists, listsUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        marginTop: "0.5rem",
      }}
    >
      {lists.map((list) => (
        <SingleList key={list.id} list={list} />
      ))}
      <Box>
        <Card
          sx={{
            width: "20rem",
            height: "auto",
            textAlign: "center",
            color: "white",
            position: "relative",
            zIndex: 2,
            cursor: "pointer",
          }}
          onClick={() => setIsEditing(true)}
        >
          <CardContent>
            <Typography sx={{ color: "black" }}>Create List</Typography>
          </CardContent>
          {isEditing && (
            <CardContent>
              <form
                onSubmit={(e) => {
                  setIsEditing(false);
                  handleCreateList(e, listsUpdate, lists);
                }}
              >
                <TextField
                  sx={{
                    width: "80%",
                    height: "auto",
                    marginBottom: "0.5rem",
                    backgroundColor: "white",
                  }}
                  name="listName"
                  type="text"
                  placeholder="Enter List Name"
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
                  Add List
                </Button>
              </form>
            </CardContent>
          )}
          {isEditing && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(false);
              }}
              type="button"
              sx={{
                position: "absolute",
                top: "9.5rem",
                left: "15rem",
                color: "black",
                zIndex: 100,
              }}
            >
              x
            </Button>
          )}
        </Card>
      </Box>
    </Box>
  );
};

export default AllLists;
