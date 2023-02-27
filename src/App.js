import { Player } from "@lottiefiles/react-lottie-player";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import About from "components/Header/contents/about";
import Contact from "components/Header/contents/contact";
import FirstContent from "components/Header/contents/firstContent";
import Pricing from "components/Header/contents/pricing";
import useLotties from "hooks/useLotties";
import { createRef, useEffect, useState } from "react";
import { theme } from "utils/theme";
import "./App.css";

function App() {
  const [firstRender, setFirstRender] = useState(true);
  const { DisplayLotties, setImageLoties } = useLotties();
  const handleEventLottie = (e) => {
    if (e === "pause") {
      setFirstRender(false);
    }
  };
  useEffect(() => {
    setImageLoties(
      "https://assets4.lottiefiles.com/packages/lf20_2m1smtya.json"
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {firstRender ? (
          <DisplayLotties handleLottie={handleEventLottie} />
        ) : (
          <Grid>
            <FirstContent />
            <About />
            <Pricing />
            <Contact />
          </Grid>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
