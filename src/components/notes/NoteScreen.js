import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);

  const [formValues, handleInputCHange] = useForm(note);

  const { title, body } = formValues;

  // const dispatch = useDispatch();

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some new concert..."
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputCHange}
        />
        <textarea
          placeholder="What concert you were"
          className="notes__textarea"
          value={body}
          onChange={handleInputCHange}
        ></textarea>

        {note.url && (
          <div className="notes__image">
            <img src={`${note.url}`} alt="venue" />
          </div>
        )}
      </div>
    </div>
  );
};
