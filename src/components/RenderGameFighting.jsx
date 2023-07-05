import { apiGame } from "../services/apiGame.service";
import { Grid, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Heading from "./Heading";
const data = apiGame();
export default function RenderGameFighting({ value }) {
  const textStyle = {
    height: "48px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    padding: "0px 10px",
  };
  const [games, setGames] = useState([]);
  useEffect(() => {
    data.then(setGames);
  }, []);
  return (
    <div className="gameList">
      <Heading>{value}</Heading>
      <Grid container spacing={2}>
        {games.map((game) => {
          if (game.genre == value) {
            return (
              <Grid item xs={4}>
                <div
                  className="item"
                  key={game.id}
                  style={{
                    backgroundColor: "#2b2b2b",
                    width: "365px",
                  }}
                >
                  <img src={game.thumbnail} />
                  <div className="name">{game.title}</div>
                  <div className="description" style={textStyle}>
                    {game.short_description}
                  </div>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                  >
                    <div className="genre" style={{ padding: "0px 10px" }}>
                      {game.genre}
                    </div>
                    <Button variant="contained" style={{ padding: "10px" }}>
                      <AddIcon />
                    </Button>
                  </Stack>
                </div>
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
}
