import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { meetupContext } from "../MeetContext";
import RSVPModal from "../RSVPModal";
export default function IndividualMeet() {
  const { meetId } = useParams();
  const { meetData } = useContext(meetupContext);
  const [isOpen, setIsOpen] = useState(false);
  const meetInfo = meetData.find(({ id }) => id === meetId);
  const begin = meetInfo.eventStartTime.split("T");
  const end = meetInfo.eventEndTime.split("T");
  const startDate = begin[0];
  const formattedStartDate = new Date(startDate).toDateString();
  const endDate = end[0];
  const formattedEndDate = new Date(endDate).toDateString();
  function saveRSVP(event) {
    event.preventDefault();
    meetInfo.isRSVP = true;
    setIsOpen(false);
  }
  return (
    <div className="meet-parent">
      <div className="main-content">
        <h2>{meetInfo.title}</h2>
        <p>Hosted by: {meetInfo.hostedBy}</p>
        <div>
          <img src={meetInfo.eventThumbnail} alt="" />
        </div>
        <h3>Details</h3>
        <p>{meetInfo.eventDescription}</p>
        <h3>Additional Information: </h3>
        <span>
          <h4>Dress code: </h4>
          <p>{meetInfo.additionalInformation.dressCode}</p>
        </span>
        <span>
          <h4>Age restrictions: </h4>
          {meetInfo.additionalInformation.ageRestrictions}
        </span>
        <h3>Event Tags:</h3>
        <ul>
          {meetInfo.eventTags.map((item, index) => (
            <li key={index} className="tags">{item}</li>
          ))}
        </ul>
      </div>
      <div className="side-content">
        <span>
          {formattedStartDate} at {begin[1]}pm to {formattedEndDate} at {end[1]}
          pm
        </span>
        <span>
          <p>{meetInfo.location}</p>
          <p>{meetInfo.address}</p>
        </span>
        <h3>Rs: {meetInfo.price}</h3>
        <div>
          <h2>Speakers: </h2>
          <ul style={{display: "flex"}}>
            {meetInfo.speakers.map((item, index) => (
              <li key={index} style={{margin: "0.5rem"}}>
                <div>
                  <img src={item.image} alt="" className="speaker-image" />
                </div>
                <h4>{item.name}</h4>
                <p>{item.designation}</p>
              </li>
            ))}
          </ul>
          {meetInfo.isRSVP ? (
            <button className="rsvp-btn">Already RSVPed</button>
          ) : (
            <button className="rsvp-btn" onClick={() => setIsOpen(true)}>RSVP</button>
          )}
        </div>
      </div>
      {isOpen && <RSVPModal closeModal={setIsOpen} saveRSVP={saveRSVP} />}
    </div>
  );
}
