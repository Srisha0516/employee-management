import React, { useState } from "react";
import "../styles/Dashboard.css";

function Dashboard() {
  const [active, setActive] = useState("dashboard");
  const [showForm, setShowForm] = useState(false);

  const [employees, setEmployees] = useState([
    { name: "Emily Rodriguez", role: "HR Specialist" },
    { name: "Sarah Chen", role: "Senior Developer" },
    { name: "Priya Patel", role: "Marketing Manager" }
  ]);

  const [newEmp, setNewEmp] = useState({ name: "", role: "" });

  // ADD EMPLOYEE
  const handleAddEmployee = () => {
    if (newEmp.name && newEmp.role) {
      setEmployees([...employees, newEmp]);
      setNewEmp({ name: "", role: "" });
      setShowForm(false);
    }
  };

  // LOGOUT
  const handleLogout = () => {
    alert("Logged out!");
    window.location.reload(); // simple logout
  };

  return (
    <div className="main">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>PeopleOS</h2>

        <p onClick={() => setActive("dashboard")} className={active==="dashboard"?"active":""}>Dashboard</p>
        <p onClick={() => setActive("employees")} className={active==="employees"?"active":""}>Employees</p>
        <p onClick={() => setShowForm(true)}>Add Employee</p>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      {/* CONTENT */}
      <div className="content">

        {/* TOP */}
        <div className="top">
          <h1>{active === "employees" ? "Employees" : "Dashboard"}</h1>
          <button className="add-btn" onClick={() => setShowForm(true)}>
            + Add Employee
          </button>
        </div>

        {/* DASHBOARD VIEW */}
        {active === "dashboard" && (
          <>
            <div className="cards">
              <div className="card">
                <h2>{employees.length}</h2>
                <p>Total Employees</p>
              </div>

              <div className="card">
                <h2>{employees.length - 1}</h2>
                <p>Active Members</p>
              </div>

              <div className="card">
                <h2>1</h2>
                <p>On Leave</p>
              </div>

              <div className="card">
                <h2>4</h2>
                <p>Departments</p>
              </div>
            </div>
          </>
        )}

        {/* EMPLOYEE LIST */}
        {active === "employees" && (
          <div className="box">
            <h3>All Employees</h3>

            {employees.map((emp, index) => (
              <div className="employee" key={index}>
                <div className="avatar">
                  {emp.name.charAt(0)}
                </div>
                <div>
                  <p>{emp.name}</p>
                  <small>{emp.role}</small>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* POPUP FORM */}
        {showForm && (
          <div className="modal">
            <div className="modal-content">
              <h3>Add Employee</h3>

              <input
                type="text"
                placeholder="Name"
                value={newEmp.name}
                onChange={(e) =>
                  setNewEmp({ ...newEmp, name: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Role"
                value={newEmp.role}
                onChange={(e) =>
                  setNewEmp({ ...newEmp, role: e.target.value })
                }
              />

              <button onClick={handleAddEmployee}>Add</button>
              <button onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;