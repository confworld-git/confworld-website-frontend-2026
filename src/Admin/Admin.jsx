import React, { useEffect, useState } from "react";
import "./Admin.css";
import { BiLogOutCircle } from "react-icons/bi";
import { BiSolidFoodMenu } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { toaster } from "evergreen-ui";
import AdminPanel from '../CPA Dash/Adminpanel'

const Admin = () => {
  const navigate = useNavigate();
  const [Control, setControl] = useState("Student Membership");
  const [studentData, setStudentData] = useState([]);
  const [professionalData, setProfessionalData] = useState([]);
  const [institutionalData, setInstitutionalData] = useState([]);
  const [corporateData, setCorporateData] = useState([]);
  const [PaymentGateway, setPaymentGateway] = useState([]);
  const [PaymentDetails, setPaymentDetails] = useState([]);

  const HandleLogout = () => {
    localStorage.removeItem("CONFWORLD_AUTH");
    navigate("/Login");
  };

  useEffect(() => {
    const LoginDetails = localStorage.getItem("CONFWORLD_AUTH");
    if (!LoginDetails) {
      navigate("/Login");
    }
  }, []);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [
          studentResponse,
          professionalResponse,
          institutionalResponse,
          corporateResponse,
          Payment,
          Details,
        ] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/Send-Student-Membership`),
          axios.get(
            `${import.meta.env.VITE_API_URL}/Send-Professional-Membership`
          ),
          axios.get(
            `${import.meta.env.VITE_API_URL}/Send-Institutional-Membership`
          ),
          axios.get(
            `${import.meta.env.VITE_API_URL}/Send-Corporate-Membership`
          ),
          axios.get(`${import.meta.env.VITE_API_URL}/Send-Payment`),
          axios.get(`${import.meta.env.VITE_API_URL}/Send-Payment-Details`),
        ]);

        setStudentData(studentResponse.data);
        setProfessionalData(professionalResponse.data);
        setInstitutionalData(institutionalResponse.data);
        setCorporateData(corporateResponse.data);
        setPaymentGateway(Payment.data);
        setPaymentDetails(Details.data);
      } catch (error) {
        console.error("Error fetching membership data:", error);
      }
    };

    fetchAllData();
  }, []);

  const HandleExcelFile = (data, name) => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, `${name}.xlsx`);
  };

  const HandleDataDelete = async (id, name) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/Delete/Data`,
        { id: id, Name: name }
      );
      toaster.success(response.data.message);
    } catch (error) {
      console.log(error);
      toaster.danger("Error deleting data");
    }
  };

  return (
    <section className="dashboard">
      <section className="left">
        <img
          src="/logo/cerada-logo.webp"
          alt="cerada-logo"
          width={450}
          height={450}
          loading="lazy"
        />
        <ul>
          <li>Dashboard</li>
          <li onClick={() => setControl("Professional Ambassadors")}>
            <BiSolidFoodMenu />
            Professional Ambassadors
          </li>
          <li onClick={() => setControl("Student Membership")}>
            <BiSolidFoodMenu />
            Student Membership
          </li>
          
          <li onClick={() => setControl("Professional Membership")}>
            <BiSolidFoodMenu />
            Professional Membership
          </li>
          <li onClick={() => setControl("Institutional Membership")}>
            <BiSolidFoodMenu />
            Institutional Membership
          </li>
          <li onClick={() => setControl("Corporate Membership")}>
            <BiSolidFoodMenu />
            Corporate Membership
          </li>
          <li onClick={() => setControl("Payment")}>
            <BiSolidFoodMenu />
            Payment
          </li>
          <li>
            <BiLogOutCircle />
            <button onClick={HandleLogout}>Log Out</button>
          </li>
        </ul>
      </section>
      <section
        className="right"
        style={{ display: Control === "Student Membership" ? "block" : "none" }}
      >
        <h1>Student Membership</h1>
        <button
          className="add-new"
          onClick={() => navigate("/Student-Membership")}
        >
          Add New +
        </button>
        <button
          className="add-new"
          onClick={() => HandleExcelFile(studentData, "Student_Membership")}
        >
          Download Excel
        </button>
        <div className=" w-full h-full overflow-auto">
          <table className="journals-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Country</th>
                <th>Qualification</th>
                <th>College</th>
                <th>Department</th>
                <th>Status</th>
                <th>Date & Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((items, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {items.firstName}
                      {items.lastName}
                    </td>
                    <td>{items.email}</td>
                    <td>{items.mobile}</td>
                    <td>{items.country}</td>
                    <td>{items.qualification}</td>
                    <td>{items.university}</td>
                    <td>{items.department}</td>
                    <td id="status-pay">
                      {PaymentDetails.find(
                        (detail) => items._id === detail.orders.receipt
                      )
                        ? PaymentDetails.find(
                            (detail) => items._id === detail.orders.receipt
                          ).orders.status
                        : "NA"}
                    </td>
                    <td>
                      {new Date(items.createdAt).toLocaleDateString()}
                      <br />
                      <br />
                      {new Date(items.createdAt).toLocaleTimeString()}
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() =>
                          HandleDataDelete(items._id, "StudentMemberships")
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <section
        className="right"
        style={{ display: Control === "Professional Ambassadors" ? "block" : "none" }}
      >
        <AdminPanel />
      </section>
      <section
        className="right"
        style={{
          display: Control === "Professional Membership" ? "block" : "none",
        }}
      >
        <h1>Professional Membership</h1>
        <button
          className="add-new"
          onClick={() => navigate("/Professional-Membership")}
        >
          Add New +
        </button>
        <button
          className="add-new"
          onClick={() =>
            HandleExcelFile(professionalData, "Professional_Membership")
          }
        >
          Download Excel
        </button>
        <div className=" w-full h-full overflow-auto">
          <table className="journals-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Country</th>
                <th>Qualification</th>
                <th>College</th>
                <th>Department</th>
                <th>Status</th>
                <th>Date & Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {professionalData.map((items, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {items.firstName}
                      {items.lastName}
                    </td>
                    <td>{items.email}</td>
                    <td>{items.mobile}</td>
                    <td>{items.country}</td>
                    <td>{items.qualification}</td>
                    <td>{items.university}</td>
                    <td>{items.department}</td>
                    <td id="status-pay">
                      {PaymentDetails.find(
                        (detail) => items._id === detail.orders.receipt
                      )
                        ? PaymentDetails.find(
                            (detail) => items._id === detail.orders.receipt
                          ).orders.status
                        : "NA"}
                    </td>

                    <td>
                      {new Date(items.createdAt).toLocaleDateString()}
                      <br />
                      <br />
                      {new Date(items.createdAt).toLocaleTimeString()}
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() =>
                          HandleDataDelete(items._id, "ProfessionalMemberships")
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <section
        className="right"
        style={{
          display: Control === "Institutional Membership" ? "block" : "none",
        }}
      >
        <h1>Institutional Membership</h1>
        <button
          className="add-new"
          onClick={() => navigate("/Institutional-Membership")}
        >
          Add New +
        </button>
        <button
          className="add-new"
          onClick={() =>
            HandleExcelFile(institutionalData, "Institute_Membership")
          }
        >
          Download Excel
        </button>
        <div className=" w-full h-full overflow-auto">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Selected Plan</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Country</th>
                <th>Qualification</th>
                <th>College</th>
                <th>Department</th>
                <th>Status</th>
                <th>Date & Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {institutionalData.map((items, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{items.SelectPlan}</td>
                    <td>
                      {items.firstName}
                      {items.lastName}
                    </td>
                    <td>{items.email}</td>
                    <td>{items.mobile}</td>
                    <td>{items.country}</td>
                    <td>{items.qualification}</td>
                    <td>{items.university}</td>
                    <td>{items.department}</td>
                    <td id="status-pay">
                      {PaymentDetails.find(
                        (detail) => items._id === detail.orders.receipt
                      )
                        ? PaymentDetails.find(
                            (detail) => items._id === detail.orders.receipt
                          ).orders.status
                        : "NA"}
                    </td>

                    <td>
                      {new Date(items.createdAt).toLocaleDateString()}
                      <br />
                      <br />
                      {new Date(items.createdAt).toLocaleTimeString()}
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() =>
                          HandleDataDelete(
                            items._id,
                            "InstitutionalMemberships"
                          )
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <section
        className="right"
        style={{
          display: Control === "Corporate Membership" ? "block" : "none",
        }}
      >
        <h1>Corporate Membership</h1>
        <button
          className="add-new"
          onClick={() => navigate("/Corporate-Membership")}
        >
          Add New +
        </button>
        <button
          className="add-new"
          onClick={() => HandleExcelFile(corporateData, "Corporate_Membership")}
        >
          Download Excel
        </button>
        <div className=" w-full h-full overflow-auto">
          <table className="journals-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Country</th>
                <th>Company</th>
                <th>Department</th>
                <th>Date & Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {corporateData.map((items, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {items.firstName}
                      {items.lastName}
                    </td>
                    <td>{items.email}</td>
                    <td>{items.mobile}</td>
                    <td>{items.country}</td>
                    <td>{items.Company}</td>
                    <td>{items.department}</td>
                    <td>
                      {new Date(items.createdAt).toLocaleDateString()}
                      <br />
                      <br />
                      {new Date(items.createdAt).toLocaleTimeString()}
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() =>
                          HandleDataDelete(items._id, "CorporateMemberships")
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <section
        className="right"
        style={{
          display: Control === "Payment" ? "block" : "none",
        }}
      >
        <h1>Payment</h1>
        <div className=" w-full h-full overflow-auto">
          <table className="journals-table pay">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Mode_of_participate</th>
                <th>Currency</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Country</th>
                <th>Service Required</th>
                <th>City</th>
                <th>Address</th>
                <th>Status</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {PaymentGateway.map((items, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{items.mode_of_participate}</td>
                    <td>{items.currency}</td>
                    <td>{items.amount}</td>
                    <td>{items.orders.status}</td>
                    <td>{items.name}</td>
                    <td>{items.email}</td>
                    <td>{items.phoneNumber}</td>
                    <td>{items.country}</td>
                    <td>{items.serviceRequired}</td>
                    <td>{items.city}</td>
                    <td>{items.address}</td>
                    <td>{items.orders.status}</td>
                    <td>
                      {new Date(items.createdAt).toLocaleDateString()}
                      <br />
                      {new Date(items.createdAt).toLocaleTimeString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Admin;
