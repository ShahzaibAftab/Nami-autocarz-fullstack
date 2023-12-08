import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/styles.css'; 
import projectImage from './scholarship_images/stanford.png';

const navbarItems = [
  { title: 'Dashboard', url: 'user-dashboard' },
  { title: 'Jobs', url: 'userJobs' },
  { title: 'Scholarships', url: 'userScholarships' },
  { title: 'Profile', url: 'profile' },
];

const ScholarshipsPage = () => {
  return (
    <>
      <div className="wrapper">
        <div className='bg-dark text-white' style={{ position: 'fixed', width: '100%', zIndex: '1000' }}>
          <div id='navbar' style={{ display: 'flex', paddingBlock: '.5em', alignItems: 'center', margin: '0 auto', maxWidth: '1200px' }}>
            <h2 style={{ marginInline: '1em', color: 'white', textDecoration: 'none' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>ED OP</Link>
            </h2>
            <ul className='list-unstyled' style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', margin: 0 }}>
              {navbarItems?.map((item) => (
                <li key={item.url} style={{ marginInline: '1em' }}>
                  <Link to={`/${item.url}`} style={{ color: 'white', textDecoration: 'none' }}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div id="sidebarContainer"></div>

        <div id="content">

          <br /><br />
          <div className="container mt-4">
            <div className="row mt-3">
              <div className="col-md-6 offset-md-3">
                <input type="text" id="searchInput" className="form-control" placeholder="Search by Title" />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <h2><strong>Scholarships</strong></h2>
            </div>
            <div className="row mt-4">
              <div className='col-md-4'>
                <div className='card' style={{ width: '23rem' }}>
                  <img className='card-img-top' src={projectImage} alt='Card image cap' style={{ height: '200px' }} />
                  <div className='card-body'>
                    <h5 className='card-title'>Stanford Scholarship</h5>
                    <p style={{ fontSize: '16px' }}>
                      Full scholarship to Stanford University for outstanding academic achievements. Apply now to pursue your dreams!
                    </p>
                  </div>
                </div>
              </div>
              {/* Repeat the above card structure for other scholarships */}
            </div>
          </div>
        </div>
      </div>

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
      <script src="script.js"></script>
    </>
  );
};

export default ScholarshipsPage;
