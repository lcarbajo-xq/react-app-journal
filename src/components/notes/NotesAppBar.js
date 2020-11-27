import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startPictureUpload, startSaveNote } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSaveNote = () => {
    console.log(active);
    dispatch(startSaveNote(active));
  };

  const handleFileChange = (e) => {
    const picture = e.target.files[0];
    if (picture) {
      dispatch(startPictureUpload(picture));
    }
  };

  const handlePictureUpload = () => {
    document.querySelector("#fileSelector").click();
  };

  return (
    <div className="notes__appbar">
      <span>22 de Noviembre 2020</span>
      <input
        id="fileSelector"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handlePictureUpload}>
          Picture
        </button>
        <button className="btn" onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
};
