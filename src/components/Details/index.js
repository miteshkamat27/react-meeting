import React from "react";
import { useSelector } from "react-redux";

export const Details = () => {
  const { meetings } = useSelector((state) => state.meeting);
  const meetingDetails = meetings[0];
  return (
    <div>
      <p>{meetingDetails?.meetingDate}</p>
      <p>{meetingDetails?.meetingName}</p>
      <p>{meetingDetails?.description}</p>
      <p>{meetingDetails?.attendees}</p>
    </div>
  );
};
