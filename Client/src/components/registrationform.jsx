// components/registrationform.js

import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    bio: '',
    academicHistory: '',
    employmentHistory: '',
    skills: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the registration data to the server
      const response = await axios.post('/api/register', formData);

      // Handle the response, e.g., show a success message
      console.log('Registration successful!', response.data);
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add input fields for each piece of user information */}
      <label>First Name:</label>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      
      <label>Last Name:</label>
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />

      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />

      <label>Bio:</label>
      <textarea name="bio" value={formData.bio} onChange={handleChange} />

      <label>Academic History:</label>
      <textarea name="academicHistory" value={formData.academicHistory} onChange={handleChange} />

      <label>Employment History:</label>
      <textarea name="employmentHistory" value={formData.employmentHistory} onChange={handleChange} />

      <label>Skills:</label>
      <input type="text" name="skills" value={formData.skills} onChange={handleChange} />


      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
