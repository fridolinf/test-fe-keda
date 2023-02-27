import { Player } from "@lottiefiles/react-lottie-player";
import React, { createRef, useState } from "react";

const useLotties = () => {
  const [imageLoties, setImageLoties] = useState("");
  const player = createRef();

  const lottieDefaultStyles = {
    background:
      "linear-gradient(191deg, rgba(230,65,154,0.5131302521008403) 6%, rgba(93,93,185,0.7120098039215687) 28%, rgba(0,212,255,0.6223739495798319) 84%, rgba(230,65,154,0.5215336134453781) 94%)",
    width: "100vw",
    height: "100vh",
  };

  const DisplayLotties = ({
    handleLottie = null,
    needLoop = false,
    isAutoPlay = true,
    styles = lottieDefaultStyles,
  }) => (
    <Player
      onEvent={(e) => handleLottie && handleLottie(e)}
      ref={player}
      autoplay={isAutoPlay}
      loop={false}
      controls={needLoop}
      style={styles}
      src={imageLoties}
    ></Player>
  );
  return { DisplayLotties, setImageLoties };
};

export default useLotties;
