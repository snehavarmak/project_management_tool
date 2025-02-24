import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {project.status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Deadline: {project.deadline}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;