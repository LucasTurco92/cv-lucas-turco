import { useState } from "react";

const useOpen = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return [open, handleOpen];
};


export default useOpen;