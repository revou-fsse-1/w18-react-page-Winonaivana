import React, { useState } from "react";

interface Props {
  initial: boolean;
  onSaveChange: (saved: boolean) => void;
}

const SaveButton: React.FC<Props> = ({ initial, onSaveChange }) => {
  const [saved, setSaved] = useState(initial);

  const handleSave = () => {
    const newSaved = !saved;
    setSaved(newSaved);
    onSaveChange(newSaved);
  };

  return (
    <div>
      <button onClick={handleSave}>{saved ? "unsave" : "save"}</button>
    </div>
  );
};

export default SaveButton;
