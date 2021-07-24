import React, { useState, useRef } from "react";
import { Details } from "../Details/index";
import { useDispatch } from "react-redux";
import { updateMeeting } from "../../redux/actions/MeetingActions";

const defaultFormState = {
  meetingId: null,
  meetingDate: "",
  meetingName: "",
  description: "",
  attendees: ""
};

export const EditMeeting = ({ selectedMeeting, meetingDate }) => {
  const dispatch = useDispatch();
  const dateRef = useRef();
  const [fields, setFields] = useState({
    meetingDate: selectedMeeting?.meetingDate,
    meetingName: selectedMeeting?.meetingName,
    description: selectedMeeting?.description,
    attendees: selectedMeeting?.attendees
  });
  // const [edit, setEdit] = useState(false);
  const handleChange = (e) => {
    const {
      target: { name, value }
    } = e;
    setFields((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      meetingDate: dateRef.current.value,
      meetingName: fields.meetingName,
      description: fields.description,
      attendees: fields.attendees
    };
    console.log(data);
    dispatch(updateMeeting(meetingDate, data));
    setFields(defaultFormState);
  };

  return (
    <div className="content">
      <h3>Edit Meeting</h3>
      <form onSubmit={handleSubmit}>
        <div className="formFields">
          <label htmlFor="start">Date:</label>
          <input
            type="date"
            id="meetingDate"
            name="meetingDate"
            ref={dateRef}
            value={fields.meetingDate || ""}
            min="2021-01-01"
            max="2021-12-31"
            onChange={handleChange}
          />
        </div>
        <div className="formFields">
          <label htmlFor="meetingName">Meeting name:</label>
          <input
            type="text"
            id="meetingName"
            name="meetingName"
            onChange={handleChange}
            value={fields.meetingName}
          />
        </div>
        <div className="formFields">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleChange}
            value={fields.description}
          />
        </div>
        <div className="formFields">
          <label htmlFor="attendees">Attendees:</label>
          <input
            type="email"
            id="attendees"
            name="attendees"
            onChange={handleChange}
            value={fields.attendees}
            multiple
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <Details />
    </div>
  );
};
