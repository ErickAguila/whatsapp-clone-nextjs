import React from "react";
import * as ReactDOM from 'react-dom';

function PhotoPicker({ onChange }) {
  const component = (
    <input type="file" hidden id="photo-picker" onChange={onChange} />
  );
  return ReactDOM.createPortal(
    component,
    document.getElementById("photo-picket-element")
  );
}

export default PhotoPicker;
