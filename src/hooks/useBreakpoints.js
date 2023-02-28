import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

const useMediaQuerys = () => {
  const minWidth300 = useMediaQuery("(min-width:300px)");
  const minWidth600 = useMediaQuery("(min-width:600px)");
  const minWidth900 = useMediaQuery("(min-width:900px)");
  const [breakWidth, setBreakWidth] = useState(300);
  useEffect(() => {
    if (minWidth300) {
      setBreakWidth(300);
    }
    if (minWidth300 && minWidth600) {
      setBreakWidth(600);
    }
    if (minWidth300 && minWidth600 && minWidth900) {
      setBreakWidth(900);
    }
  }, [minWidth300, minWidth600, minWidth900]);

  return { breakWidth };
};

export default useMediaQuerys;
