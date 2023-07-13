import { createContext, useState } from "react";
import { data } from "./Data";

export const meetupContext = createContext();

// eslint-disable-next-line react/prop-types
export default function MeetContext({ children }) {
  const [meetData, setMeetData] = useState(data.meetups);
  const [searchInput, setSearchInput] = useState("");
  const [selectInput, setSelectInput] = useState("Both");
console.log(searchInput);
  const searchedData =
    searchInput.length > 0
      ? meetData.filter(
          (item) =>
            item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.eventTags.find((element) =>
              element.toLowerCase().includes(searchInput.toLowerCase())
            )
        )
      : meetData;
  const selectedData =
    selectInput.length !== 4
      ? searchedData.filter((item) => item.eventType === selectInput)
      : searchedData;
  return (
    <meetupContext.Provider
      value={{
        selectedData,
        meetData,
        setMeetData,
        setSearchInput,
        setSelectInput,
      }}
    >
      {children}
    </meetupContext.Provider>
  );
}
