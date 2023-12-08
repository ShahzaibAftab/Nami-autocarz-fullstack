import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div>
      <div className='bg-dark text-white'>
        <div id='navbar' style={{ display: 'flex', paddingBlock: '.5em', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2 style={{ marginInline: '1em', color: 'white', textDecoration: 'none' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>ED OP</Link>
            </h2>
            <ul className='list-unstyled' style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', margin: 0 }}>
              <li style={{ marginInline: '1em' }}>
                <Link to='/user-dashboard' style={{ color: 'white', textDecoration: 'none' }}>
                  Dashboard
                </Link>
              </li>
              <li style={{ marginInline: '1em' }}>
                <Link to='/userJobs' style={{ color: 'white', textDecoration: 'none' }}>
                  Jobs
                </Link>
              </li>
              <li style={{ marginInline: '1em' }}>
                <Link to='/userScholarships' style={{ color: 'white', textDecoration: 'none' }}>
                  Scholarships
                </Link>
              </li>
              <li style={{ marginInline: '1em' }}>
                <Link to='/profile' style={{ color: 'white', textDecoration: 'none' }}>
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <button type='button' className='btn btn-info' id='sidebarCollapse'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
      </div>

      <div className="ml-5 p-3">
        <div id="dashboard">
          <h2>Dashboard</h2>
          <p>Dashboard section.</p>
        </div>

        <div id="jobs">
          <h2>Jobs</h2>
          <p>Jobs section.</p>
        </div>

        <div id="scholarships">
          <h2>Scholarships</h2>
          <p>Scholarships section.</p>
        </div>

        <div id="profile">
          <h2>Profile</h2>
          <p>Profile section.</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
