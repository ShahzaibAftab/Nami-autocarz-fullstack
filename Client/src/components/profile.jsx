import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Profile = () => {
  const [formData, setFormData] = useState({
    academicHistory: '',
    employmentHistory: '',
    skills: '',
  });
  const navigate=useNavigate();
  const id = localStorage.getItem('_id');
  console.log('user_id', id)//comment

  useEffect(() => {
    // Fetch current user profile data and set the form
    const fetchProfileData = async () => {
      const res = await axios.get(`https://namiserver.onrender.com/api/profile/fetch/${id}`);
      setFormData(res.data);
    };

    fetchProfileData();
  }, []);

  const { academicHistory, employmentHistory, skills } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitForm = async (e) => {
    e.preventDefault();
    // Update user profile
    console.log('submitted')//comment
    try {
      // Update user profile
      await axios.put(`https://namiserver.onrender.com/api/profile/update/${id}`, formData);

      // Show success message
      alert("Complain Successful");
      navigate('/user-dashboard');
      // Additional logic if needed
    } catch (error) {
      // Handle errors, e.g., show an error message
      //toast.error('An error occurred while updating the profile');
      alert('unable to submit form')
    }
  };

  return (
    <>
      <div className='bg-dark text-white' style={{ position: 'fixed', width: '100%', zIndex: '1000' }}>
        <div id='navbar' style={{ display: 'flex', paddingBlock: '.5em', alignItems: 'center', margin: '0 auto', maxWidth: '1200px' }}>
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
      </div>

      <div className="wrapper d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <form onSubmit={submitForm} className="col-md-6" style={{ marginTop: '70px' }}>
          <div className="form-group">
            <label htmlFor="academicHistory">Academic History:</label>
            <textarea
              className="form-control"
              id="academicHistory"
              name="academicHistory"
              value={formData.academicHistory}
              onChange={onChange}
              rows="6"
            />
          </div>
          <div className="form-group">
            <label htmlFor="employmentHistory">Employment History:</label>
            <textarea
              className="form-control"
              id="employmentHistory"
              name="employmentHistory"
              value={formData.employmentHistory}
              onChange={onChange}
              rows="6"
            />
          </div>
          <div className="form-group">
            <label htmlFor="skills">Skills:</label>
            <textarea
              className="form-control"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={onChange}
              rows="6"
            />
          </div>
          <button type="submit" onClick={submitForm} className="btn btn-primary">Save Profile</button>
        </form>
      </div>
    </>
  );
};

export default Profile;