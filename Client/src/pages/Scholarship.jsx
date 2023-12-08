import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const navbar = [
  { title: "Dashboard", url: "admin-dashboard" },
  { title: "Manage Jobs", url: "job" },
  { title: "Manage Scholarships", url: "scholarship" },
  { title: "Users", url: "users" },
];

export default function Scholarship() {
  const [title, setTitle] = useState();
  const [educationType, setEducationType] = useState();
  const [country, setCountry] = useState();
  const [scholarships, setScholarships] = useState();
  const [reload, setReload] = useState(false);

  const handleFetch = async () => {
    const config = {
      method: "GET",
      url: "https://namiserver.onrender.com/api/scholarship/fetch",
    };
    const response = await axios(config);
    setScholarships(response?.data);
  };

  useEffect(() => {
    setReload(false);
    handleFetch();
  }, [reload]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      url: "/api/scholarship/create",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ title, educationType, country }),
    };
    await axios(config);
    setReload(true);
  };

  const handleDelete = async (id) => {
    const config = {
      method: "DELETE",
      url: `/api/scholarship/delete/${id}`,
    };
    await axios(config);
    setReload(true);
  };

  return (
    <div>
      <div className="bg-dark text-white">
        <div
          id="navbar"
          style={{
            display: "flex",
            paddingBlock: ".5em",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2 style={{ marginInline: '1em', color: 'white', textDecoration: 'none' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>ED OP</Link>
            </h2>
            <ul
              className="list-unstyled"
              style={{
                display: "flex",
                flexDirection: "row",
                listStyle: "none",
                margin: 0,
              }}
            >
              {navbar?.map((item) => (
                <li key={item.url} style={{ marginInline: "1em" }}>
                  <Link to={`/${item?.url}`} style={{ color: "white", textDecoration: "none" }}>
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button type="button" className="btn btn-info" id="sidebarCollapse">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      <div id="content" className="container-fluid">
        <div class="d-flex justify-content-end mt-5">
          <button
            type="button"
            id="createJobsBtn"
            class="btn btn-success float-right"
            data-toggle="modal"
            data-target="#createJobsModal"
          >
            Create Scholarships
          </button>
        </div>

        <div
          class="modal fade"
          id="createJobsModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="createJobsModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="createJobsModalLabel">
                  Create Scholarship
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form id="createJobsForm" onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label for="scholarshipTitle">Scholarship Title</label>
                    <input
                      type="text"
                      class="form-control"
                      id="scholarshipTitle"
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="Education Type">Education Type</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Education Type"
                      required
                      onChange={(e) => setEducationType(e.target.value)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="Country">Country</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Country"
                      required
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>

                  <button type="submit" class="btn btn-primary">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {scholarships?.length > 0 && (
          <table class="table mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Scholarship Title</th>
                <th scope="col">Education Type</th>
                <th scope="col">Total</th>
                <th scope="col">Country</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody id="jobsTableBody">
              {scholarships?.map((scholarship) => (
                <tr key={scholarship?._id}>
                  <th scope="row">1</th>
                  <td>{scholarship?.title}</td>
                  <td>{scholarship?.educationType}</td>
                  <td>{scholarship?.totalAvailable}</td>
                  <td>{scholarship?.country}</td>
                  <td>
                    <button
                      class="btn btn-danger btn-sm"
                      onClick={() => handleDelete(scholarship?._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
