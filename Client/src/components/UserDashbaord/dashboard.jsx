import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Dashboard = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../Style/styles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet" />

        <title>Collapsible Sidebar</title>
      </head>
      <body>
        <div className="wrapper">
          <div id="sidebarContainer"></div>

          <div id="content">
            <button type="button" id="sidebarCollapse" className="btn btn-info">
              <i className="fas fa-bars"></i>
            </button>

            {/* Trending Jobs Section */}
            <div className="container mt-5">
              <h2>
                <strong>Trending Jobs</strong>
              </h2>
              <div className="row mt-4">
                {/* Add your Job cards here */}
              </div>

              <div className="row mt-5">
                {/* Add your more Job cards here */}
              </div>
            </div>

            {/* Latest Scholarships Section */}
            <div className="container mt-4">
              <h2>
                <strong>Latest Scholarships</strong>
              </h2>
              <div className="row mt-4">
                {/* Add your Scholarship cards here */}
              </div>
            </div>
          </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        {/* Include other necessary scripts */}
      </body>
    </html>
  );
};

export default Dashboard;
