import { useEffect } from "react";
// eslint-disable-next-line react/prop-types
export default function RSVPModal({ closeModal, saveRSVP }) {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          opacity: "0.5",
          backgroundColor: "grey",
        }}
      ></div>
      <div className="modal-background">
        <div className="modal-container">
          <div className="close-btn">
            <button onClick={() => closeModal(false)}>X</button>
          </div>
          <div className="modal-header">
            <h3>Complete your RSVP </h3>
            <p style={{ color: "grey" }}>Fill in your personal information</p>
          </div>
          <div className="modal-body">
            <form action="submit" onSubmit={(e) => saveRSVP(e)}>
              <label htmlFor="">Name: </label>
              <input type="text" name="firstName" id="finame" />
              <label htmlFor="">Number </label>
              <input type="Number" name="lastName" id="lsname" />
              <p style={{ color: "grey" }}>
                * You have to make the payment at the venue
              </p>
              <button onClick={() => closeModal(false)} className="cancel-btn">
                Cancel
              </button>
              <button type="submit">RSVP</button>
            </form>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </>
  );
}
