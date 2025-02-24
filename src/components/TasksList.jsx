import React from 'react';
import { Container, Typography } from '@mui/material';
import TaskList from '../components/TaskList';

const Tasks = () => {
  const tasks = [
    { name: 'Design UI', dueDate: '2023-11-01' },
    { name: 'Implement Backend', dueDate: '2023-11-15' },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Tasks
      </Typography>
      <TaskList tasks={tasks} />
    </Container>
  );
};

export default Tasks;