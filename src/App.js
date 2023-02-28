import { Player } from "@lottiefiles/react-lottie-player";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import About from "components/Contents/about";
import Contact from "components/Contents/contact";
import FirstContent from "components/Contents/firstContent";
import Pricing from "components/Contents/pricing";
import { createRef, useState } from "react";
import { theme } from "utils/theme";
import "./App.css";

function App() {
  const [firstRender, setFirstRender] = useState(true);
  // const { DisplayLotties } = useLotties();

  const handleEventLottie = (e) => {
    if (e === "pause") {
      setFirstRender(false);
    }
  };

  const player = createRef();

  const lottieDefaultStyles = {
    background:
      "linear-gradient(191deg, rgba(230,65,154,0.5131302521008403) 6%, rgba(93,93,185,0.7120098039215687) 28%, rgba(0,212,255,0.6223739495798319) 84%, rgba(230,65,154,0.5215336134453781) 94%)",
    width: "100vw",
    height: "100vh",
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {firstRender ? (
          <Player
            onEvent={(e) => handleEventLottie(e)}
            ref={player}
            autoplay={true}
            loop={false}
            style={lottieDefaultStyles}
            src="https://assets4.lottiefiles.com/packages/lf20_2m1smtya.json"
          />
        ) : (
          <Grid data-testId="after-lottie">
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
