import React from 'react';

import styled from '@emotion/styled';

const TaskWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '0.2rem',
});

const Task = styled.div({
  width: '100%',
  marginBottom: '0.2rem',
  padding: '0.2rem',

  color: '#FFF',

  backgroundColor: '#FF8A3D',
});

export default function Tasks({ tasks }) {
  return (
    <>
      {tasks.length > 0 && (
        <TaskWrapper>
          {tasks.map(({ id, description }) => (
            <Task key={id}>
              <p>{description}</p>
            </Task>
          ))}
        </TaskWrapper>
      )}
    </>
  );
}
