import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const TaskList = ({ tasks }) => {
  return (
    <List>
      {tasks.map((task, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText primary={task.name} secondary={Due: ${task.dueDate}} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default TaskList;