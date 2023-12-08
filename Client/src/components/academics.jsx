// Import React and any necessary modules
import './academics.css'
import React from 'react';
import { Link } from 'react-router-dom';

// Define the functional component for the form
function Academic() {   
    const submit = () => {
        // Add your logic to handle form submission here
        console.log('Form submitted!');
    };

    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from({ length: 10 }, (_, index) => currentYear - index);

    return (
        <div className="container">
            <h1 style={{ color: '#725696' }}>ED OP Online</h1>
            <p style={{ color: '#725696' }}>Academic Experience</p>

            <form>
                <label htmlFor="College">College:</label>
                <input type="text" id="College" name="College" required />

                <label htmlFor="Major">Major:</label>
                <input type="text" id="Major" name="Major" required />

                <label htmlFor="Achievement">Achievement:</label>
                <input type="text" id="Achievement" name="Achievement" required />

                <label htmlFor="GPA">GPA:</label>
                <input type="number" id="GPA" name="GPA" step="0.01" required />


                <label htmlFor="startDate">Start Date:</label>
                <input type="text" id="startDate" name="startDate" placeholder="MM/DD/YYYY" required />

                <label htmlFor="minor">Minor (if any):</label>
                <input type="text" id="minor" name="minor" />

                <label htmlFor="yearAttended">Year Attended:</label>
                <select id="yearAttended" name="yearAttended" required>
                   {yearOptions.map((year) => (
                       <option key={year} value={year}>
                           {year}
                       </option>
                    ))}
                </select>

                <label htmlFor="yearCompletion">Year of Completion:</label>
                <select id="yearCompletion" name="yearCompletion" required>
                    {yearOptions.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <Link to="/admin-dashboard">
                <button type="button" onClick={submit}>Enter</button>
                </Link>
            </form>
        </div>
    );
}

export default Academic;
