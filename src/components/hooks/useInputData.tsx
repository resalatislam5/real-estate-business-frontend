import { ChangeEvent, useState } from "react";

const useInputData = <T extends Record<string, string | number>>(
  initialState: T
) => {
  const [state, setState] = useState<T>(initialState);

  const handleInputState = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const resetInputState = () => {
    setState(initialState);
  };
  return { inputState: state, handleInputState, resetInputState };
};

export default useInputData;
