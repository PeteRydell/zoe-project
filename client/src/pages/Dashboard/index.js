import React, { useState, useContext, useEffect } from 'react';
import Students from '../../components/studentComponents/Students';
import Projects from '../../components/projectComponents/Projects';
import './dashboard.css';
import API from '../../utils/API';
import UserContext from '../../context/user/userContext';

const Dashboard = () => {
  const userContext = useContext(UserContext);

  const { username, getUser } = userContext;

  const [projects, setProjects] = useState([]);
  const [students, setStudents] = useState([]);

  const getUserData = async username => {
    const res = await API.getAll();
    res.filter(res[0].username === username);
    setProjects(res.data.projects);
    setStudents(res.data.students);
  };

  useEffect(() => {
    getUserData(username);
  });

  return (
    <div>
      <div className="display-dashboard">
        <Projects projects={projects} />
        <Students students={students} />
      </div>
    </div>
  );
};

export default Dashboard;
