import {
  propertiesDetailsTypes,
  propertiesSearchTypes,
} from "./../../constant/interfaceItems";
import { createSlice } from "@reduxjs/toolkit";

interface initialStateTypes {
  properties: propertiesDetailsTypes[];
  searchProperties: propertiesDetailsTypes[];
}
const initialState: initialStateTypes = {
  properties: [],
  searchProperties: [],
};
const propertiesSlice = createSlice({
  name: "Properties",
  initialState,
  reducers: {
    setProperties: (state, { payload }) => {
      state.properties = payload;
      //   state.searchProperties = payload;
    },

    setSearchProperties: (
      state,
      { payload }: { payload: propertiesSearchTypes }
    ) => {
      const filteredItems = state.properties.filter((e) => {
        const title = e?.title?.includes(payload?.title || "");
        const propertyTypes = e?.property_type?.includes(
          payload?.property_type || ""
        );
        const location = e?.division?.includes(payload?.division || "");
        const propertyStatus = e?.property_status?.includes(
          payload?.property_status || ""
        );

        const beds = e?.beds?.toString()?.includes(payload?.Bedrooms || "");
        const bath = e?.baths?.toString()?.includes(payload?.Bathrooms || "");
        let min_price = true;
        if (payload?.min_price) {
          min_price = e?.price >= Number(payload?.min_price);
        }
        let max_price = true;
        if (payload?.max_price) {
          max_price = e?.price <= Number(payload?.max_price);
        }

        return (
          title &&
          propertyTypes &&
          location &&
          propertyStatus &&
          beds &&
          bath &&
          min_price &&
          max_price
        );
      });
      state.searchProperties = filteredItems;
    },

    setHomeSearchProperties: (state, { payload }) => {
      if (payload.location === "") {
        state.searchProperties = [];
        return;
      }
      const filteredItems = state.properties.filter((e) => {
        const propertyStatus = e?.property_status
          ?.toLocaleLowerCase()
          ?.includes(payload?.property_status.toLocaleLowerCase());
        const address = e?.address
          ?.toLocaleLowerCase()
          .includes(payload?.location?.toLocaleLowerCase());

        const country = e?.country
          ?.toLocaleLowerCase()
          .includes(payload?.location?.toLocaleLowerCase());

        const location = address || country;
        return propertyStatus && location;
      });

      state.searchProperties = filteredItems;
    },
  },
});

export const { setProperties, setSearchProperties, setHomeSearchProperties } =
  propertiesSlice.actions;
export default propertiesSlice.reducer;
