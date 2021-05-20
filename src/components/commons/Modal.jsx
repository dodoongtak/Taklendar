import React, { useCallback } from 'react';

export default function Modal({
  date, task, setTaskTitle, onSubmit,
}) {
  const handleChangeTaskTitle = useCallback((event) => {
    const { target } = event;

    setTaskTitle(target.value);
  }, [setTaskTitle]);

  return (
    <div>
      <header>{date}</header>
      {date && (
        <div>
          <label htmlFor="task">
            tasks
          </label>
          <input
            id="task"
            type="text"
            placeholder="Event title"
            value={task}
            onChange={handleChangeTaskTitle}
            min="1"
          />

          <button
            type="submit"
            onClick={onSubmit}
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
}
