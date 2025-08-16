import { useEffect, useRef, useState } from "react";
import useInputData from "./useInputData";
import { propertiesSearchTypes } from "@/constant/interfaceItems";

const initialPropertiesSearchItems = {
  Bathrooms: "",
  Bedrooms: "",
  city: "",
  max_price: "",
  min_price: "",
  property_status: "",
  property_type: "",
  title: "",
  division: "",
};

const useHandlePropertiesSearch = (
  handleSearch: (state: propertiesSearchTypes) => void
) => {
  const [openAdvancedSearch, setOpenAdvancedSearch] = useState(false);
  const advanceSearchRef = useRef<HTMLDivElement>(null);

  // search function implement
  const { handleInputState, inputState } = useInputData(
    initialPropertiesSearchItems
  );
  const [handleOthersTags, setHandleOtherTags] = useState<
    Record<string, string[]>
  >({ tags: [] });

  useEffect(() => {
    handleSearch({ ...inputState, ...handleOthersTags });
  }, [inputState, handleOthersTags]);

  const handleAdvancedSearch = () => {
    setOpenAdvancedSearch(!openAdvancedSearch);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      advanceSearchRef.current &&
      !advanceSearchRef.current.contains(e.target as Node)
    ) {
      setOpenAdvancedSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    handleInputState,
    setHandleOtherTags,
    handleAdvancedSearch,
    inputState,
    handleOthersTags,
    advanceSearchRef,
    openAdvancedSearch,
  };
};

export default useHandlePropertiesSearch;
