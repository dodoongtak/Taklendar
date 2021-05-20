import React, { useCallback } from 'react';

import styled from '@emotion/styled';

const ModalWrapper = styled.aside(({ show }) => ({
  position: 'fixed',
  display: show ? 'flex' : 'none',
  alignItems: 'center',
  justifyContent: 'center',
  inset: '0',

  backgroundColor: 'rgba(0, 0, 0, 0.5)',
}));

const ModalContainer = styled.div({
  position: 'absolute',
  width: '500px',
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  padding: '0.5rem',

  backgroundColor: '#FFF',

  '& header': {
    fontSize: '3rem',
    fontWeight: '600',
  },

  '& button': {
    padding: '0.5rem 1rem',

    color: '#FFF',

    backgroundColor: 'rgb(27, 100, 218, 0.6)',
    border: 'none',
  },
});

const InputField = styled.div({
  width: '90%',

  '& label': {
    display: 'none',
  },

  '& input': {
    width: '100%',
    padding: '1rem',
  },
});

export default function Modal({
  date, task, setTaskTitle, onSubmit, onClose,
}) {
  const handleChangeTaskTitle = useCallback((event) => {
    const { target } = event;

    setTaskTitle(target.value);
  }, [setTaskTitle]);

  return (
    <ModalWrapper show={date} onClick={onClose}>
      {date && (
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <header>{date}</header>

          <InputField>
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
          </InputField>

          <div>
            <button
              type="submit"
              onClick={onSubmit}
            >
              Confirm
            </button>
          </div>
        </ModalContainer>
      )}
    </ModalWrapper>
  );
}
