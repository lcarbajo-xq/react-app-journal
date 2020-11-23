import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some new concert..."
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What concert you were"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMWRE9FNbuCUSPqeipXxaZwj3CYDJ8MNMEQ&usqp=CAU"
            alt="venue"
          /> */}
        </div>
      </div>
    </div>
  );
};
