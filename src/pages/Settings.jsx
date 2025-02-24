import React from 'react';
import { Container, Typography } from '@mui/material';

const Settings = () => {
return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
        Settings
    </Typography>
    <Typography variant="body1">Manage your account and preferences here.</Typography>
    </Container>
);
};

export default Settings;