import React from 'react';
import { Container, Typography } from '@mui/material';

const ProjectDetails = () => {
  const project = {
    name: 'AI-Powered CRM System',
    status: 'In Progress',
    deadline: '2023-12-15',
    description: 'A system to manage customer relationships using AI.',
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {project.name}
      </Typography>
      <Typography variant="body1">Status: {project.status}</Typography>
      <Typography variant="body1">Deadline: {project.deadline}</Typography>
      <Typography variant="body1">{project.description}</Typography>
    </Container>
  );
};

export default ProjectDetails;