import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ProjectCard from './pages/ProjectCard';
import ProjectDetails from './pages/ProjectDetails';
import TaskList from './pages/TaskList';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projectCard" element={<ProjectCard />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/tasklist" element={<TaskList />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;