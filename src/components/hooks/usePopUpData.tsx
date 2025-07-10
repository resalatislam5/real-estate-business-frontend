import { useState } from "react";

const usePopUpData = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState("");
  return { isOpen, setIsOpen, msg, setMsg };
};

export default usePopUpData;
