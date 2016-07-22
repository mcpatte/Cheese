import React from 'react';

const TaskNotes = ({
  notes
}) => {
  return (
    <div>
      <textarea rows="4" cols="50" value="Notes">
      </textarea>
      {notes}
    </div>
  );
};

export default TaskNotes;