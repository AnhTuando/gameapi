import { Route, Link, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import RenderGameShooter from "./RenderGameShooter";
import { Grid, Stack } from "@mui/material";
import RenderGameStrategy from "./RenderGameStrategy";
import RenderGameFighting from "./RenderGameFighting";
export default function GameList() {
  const textDecoration = {
    textDecoration: "none",
  };

  return (
    <div className="game-list">
      <Grid container spacing={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Button variant="contained">
            <Link to="/" style={textDecoration}>
              Shooter
            </Link>
          </Button>
          <Button variant="contained">
            <Link to="/RenderGameStrategy" style={textDecoration}>
              Strategy
            </Link>
          </Button>
          <Button variant="contained">
            <Link to="/RenderGameFighting" style={textDecoration}>
              Fighting
            </Link>
          </Button>
        </Stack>
      </Grid>
      <Routes>
        <Route
          path="/"
          element={<RenderGameShooter value={"Shooter"} />}
        ></Route>
        <Route
          path="/RenderGameStrategy"
          element={<RenderGameStrategy value={"Strategy"} />}
        ></Route>

        <Route
          path="/RenderGameFighting"
          element={<RenderGameFighting value={"Fighting"} />}
        ></Route>
      </Routes>
    </div>
  );
}
