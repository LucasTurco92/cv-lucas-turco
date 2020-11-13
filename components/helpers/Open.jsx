import { useState,useEffect } from "react";

const useOpen = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const openAlways = () =>{setOpen(true)};

let mediaQuery;

    useEffect(() => {
      mediaQuery = window.matchMedia("(min-width: 720px)");
    });
 

  return [open, handleOpen,openAlways];
};



export default useOpen;