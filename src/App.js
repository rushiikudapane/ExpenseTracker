import React from "react";
import Details from "./components/Details/Details";
import { Grid } from "@mui/material";
import Main from "./components/Main/Main";
import "./App.css";

import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";

const App = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        {window.innerWidth > 458 ? (
          <Grid item xs={12} sm={4} className="dispalyyes">
            <Details title="Income" />
          </Grid>
        ) : (
          <Grid item xs={12} sm={4} className="displayno">
            <Details title="Income" />
          </Grid>
        )}
        <Grid item xs={12} sm={4} className="main">
          <Main />
        </Grid>
        {window.innerWidth < 458 ? (
          <Grid item xs={12} sm={4} className="dispalyyes">
            <Details title="Income" />
          </Grid>
        ) : (
          <Grid item xs={12} sm={4} className="displayno">
            <Details title="Income" />
          </Grid>
        )}
        <Grid item xs={12} sm={4} classNAme="last">
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;
