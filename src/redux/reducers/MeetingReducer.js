import * as actionTypes from "../actions/actionTypes";

const initialState = {
  meetings: [],
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_MEETING:
      return {
        ...state,
        meetings: [...state.meetings, action.meeting]
      };
    case actionTypes.UPDATE_MEETING: {
      const res = state.meetings.map((item) =>
        new Date(item.meetingDate).getDate() == action.id
          ? { ...item, item: action.meeting }
          : item
      );
      console.log(res);
      return {
        ...state,
        meetings: state.meetings.map((item) =>
          new Date(item.meetingDate).getDate() == action.id
            ? { ...item, item: action.meeting }
            : item
        )
      };
    }

    case actionTypes.FETCH_MEETING_DETAILS:
      return state;
    default:
      return state;
  }
};
