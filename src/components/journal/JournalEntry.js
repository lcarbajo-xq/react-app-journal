import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({ id, date, title, body, url }) => {
  const noteDate = moment(date);

  const dispatch = useDispatch();

  const handleActiveNote = () => {
    dispatch(activeNote(id, { date, title, body, url }));
  };

  return (
    <div className="journal__entry pointer" onClick={handleActiveNote}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("do")}</h4>
      </div>
    </div>
  );
};
