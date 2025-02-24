import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for better layout
const DashboardPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  // Dummy data for the dashboard
  const currentProject = {
    name: 'AI-Powered CRM System',
    status: 'In Progress',
    deadline: '2023-12-15',
  };

  const currentTeam = [
    { name: 'John Doe', role: 'cyber security' },
    { name: 'Jane Smith', role: 'Frontend Developer' },
    { name: 'Alice Johnson', role: 'Backend Developer' },
    { name: 'Bob Brown', role: 'AI Specialist' },
  ];

  const aiQuota = {
    used: 750,
    total: 1000,
  };

  const billingDetails = {
    subscriptionPlan: 'Pro Plan',
    amountDue: '$99.99',
    dueDate: '2023-11-01',
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Current Project Section */}
        <Grid item xs={12} md={6} lg={4}>
          <DashboardPaper>
            <Typography variant="h6">Current Project</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                <strong>Name:</strong> {currentProject.name}
              </Typography>
              <Typography variant="body1">
                <strong>Status:</strong> {currentProject.status}
              </Typography>
              <Typography variant="body1">
                <strong>Deadline:</strong> {currentProject.deadline}
              </Typography>
            </Box>
          </DashboardPaper>
        </Grid>

        {/* Current Team Section */}
        <Grid item xs={12} md={6} lg={4}>
          <DashboardPaper>
            <Typography variant="h6">Current Team</Typography>
            <Box sx={{ mt: 2 }}>
              {currentTeam.map((member, index) => (
                <Typography key={index} variant="body1">
                  {member.name} - {member.role}
                </Typography>
              ))}
            </Box>
          </DashboardPaper>
        </Grid>

        {/* AI Quota Section */}
        <Grid item xs={12} md={6} lg={4}>
          <DashboardPaper>
            <Typography variant="h6">AI Quota Usage</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                <strong>Used:</strong> {aiQuota.used} / {aiQuota.total}
              </Typography>
              <Typography variant="body1">
                <strong>Remaining:</strong> {aiQuota.total - aiQuota.used}
              </Typography>
            </Box>
          </DashboardPaper>
        </Grid>

        {/* Billing Details Section */}
        <Grid item xs={12} md={6} lg={4}>
          <DashboardPaper>
            <Typography variant="h6">Billing Details</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                <strong>Plan:</strong> {billingDetails.subscriptionPlan}
              </Typography>
              <Typography variant="body1">
                <strong>Amount Due:</strong> {billingDetails.amountDue}
              </Typography>
              <Typography variant="body1">
                <strong>Due Date:</strong> {billingDetails.dueDate}
              </Typography>
            </Box>
          </DashboardPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;