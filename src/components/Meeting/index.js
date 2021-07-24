import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Details } from "../Details/index";
import { createMeeting } from "../../redux/actions/MeetingActions";

const initialFormState = {
  meetingId: "",
  meetingDate: "",
  meetingName: "",
  description: "",
  attendees: ""
};
export const Meeting = () => {
  const dispatch = useDispatch();
  const dateRef = useRef();
  const [fields, setFields] = useState({});
  const [edit, setEdit] = useState(false);
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
      meetingId: null,
      meetingDate: dateRef.current.value,
      meetingName: fields.meetingName,
      description: fields.description,
      attendees: fields.attendees
    };
    console.log(data);
    dispatch(createMeeting(data));
    setFields(initialFormState);
  };
  const handleUpdate = () => {};
  return (
    <div className="content">
      <h3>Create Meeting</h3>
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
