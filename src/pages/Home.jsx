import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { meetupContext } from "../MeetContext";

export default function Home() {
  const { selectedData, setSelectInput, setSearchInput } = useContext(meetupContext);
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h2>Meet up</h2>
        <label htmlFor="search"></label>
        <input
          type="text"
          name=""
          id="search"
          placeholder="Search by title or tags..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </header>
      <div>
        <h1>Meet Up Events</h1>
        <select name="eventType" id="" onChange={(e) => setSelectInput(e.target.value)}>
          <option value="Both" defaultValue>
            Both
          </option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>
      <div>
        <ul className="parent">
          {selectedData.map((item) => (
            <li key={item.id} className="content">
              <h3>{item.eventType}</h3>
              <div>
                <img
                  src={item.eventThumbnail}
                  alt=""
                  onClick={() => navigate(`/meet/${item.id}`)}
                />
              </div>
              <p>{Date(item.eventStartTime)}</p>
              <h3>{item.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
