import React from "react";
import { useSelector } from "react-redux";
import { EditMeeting } from "./EditMeeting";

export const MeetingUpdate = ({ match }) => {
  const { meetings } = useSelector((state) => state.meeting);
  console.log("in update component:", meetings);
  const { id } = match.params;
  console.log("meeting id:", id);
  const result = meetings.filter((item) => {
    return new Date(item.meetingDate).getDate() == id;
  });
  console.log("result:", result);
  return (
    <div>
      MeetingUpdate
      <EditMeeting meetingDate={id} selectedMeeting={result[0]} />
    </div>
  );
};
