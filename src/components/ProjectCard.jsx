import React from 'react';
import { Container, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    { name: 'AI-Powered CRM System', status: 'In Progress', deadline: '2024-12-15' },
    { name: 'Mobile App Redesign', status: 'Completed', deadline: '2025-10-01' },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </Container>
  );
};

export default Projects;