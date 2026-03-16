import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png";
import { BiSolidFoodMenu } from "react-icons/bi";
import axios from "axios";
import { MdDownloading } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";

const Dashboard = () => {
  const navigate = useNavigate();
  const [contactDetails, setContactDetails] = useState([]);
  const [jobApplies, setJobApplies] = useState([]);
  const [MembershipEnquiry, setMembershipEnquiry] = useState([]);
  const [JournalEnquiry, setJournalEnquiry] = useState([]);
  const [PresentationEnquiry, setPresentationEnquiry] = useState([]);
  const [AdvertiseEnquiry, setAdvertiseEnquiry] = useState([]);
  const [HostEnquiry, setHostEnquiry] = useState([]);
  const [Control, setControl] = useState("Membership");

  useEffect(() => {
    const LoginDetails = localStorage.getItem("Login-Confworld");
    if (!LoginDetails) {
      navigate("/Login");
    }
  }, []);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const [
          contactResponse,
          jobResponse,
          Membership,
          Journal,
          Presentation,
          Advertise,
          Host,
        ] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/contactDetails`),
          axios.get(`${import.meta.env.VITE_API_URL}/JobApplies`),
          axios.get(`${import.meta.env.VITE_API_URL}/MembershipEnquiry`),
          axios.get(`${import.meta.env.VITE_API_URL}/JournalEnquiry`),
          axios.get(`${import.meta.env.VITE_API_URL}/SubmissionEnquiry`),
          axios.get(`${import.meta.env.VITE_API_URL}/AdvertiseEnquiry`),
          axios.get(`${import.meta.env.VITE_API_URL}/HostEnquiry`),
        ]);
        setContactDetails(contactResponse.data);
        setJobApplies(jobResponse.data);
        setMembershipEnquiry(Membership.data);
        setJournalEnquiry(Journal.data);
        setPresentationEnquiry(Presentation.data);
        setAdvertiseEnquiry(Advertise.data);
        setHostEnquiry(Host.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching contact details:", err);
      }
    };

    fetchContactDetails();
  }, []);

  const handleDownload = (bufferData, fileName, fileType) => {
    try {
      if (bufferData.type === "Buffer") {
        const byteArray = new Uint8Array(bufferData.data);
        const blob = new Blob([byteArray], { type: fileType });

        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName + "-Resume.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error("Invalid buffer data format.");
      }
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  const HandleLogout = () => {
    localStorage.removeItem("Login-Confworld");
    navigate("/Login");
  };

  return (
    <div className="dashboard">
      <section className="left">
        <img
          src={logo}
          alt="dashboard-logo"
          width={450}
          height={450}
          loading="lazy"
        />
        <ul>
          <li>Dashboard</li>
          <li onClick={() => setControl("Membership")}>
            <BiSolidFoodMenu />
            Membership
          </li>
          <li onClick={() => setControl("Journal")}>
            <BiSolidFoodMenu />
            Journal
          </li>
          <li onClick={() => setControl("Presentation")}>
            <BiSolidFoodMenu />
            Presentation
          </li>
          <li onClick={() => setControl("Advertise")}>
            <BiSolidFoodMenu />
            Advertise
          </li>
          <li onClick={() => setControl("Host")}>
            <BiSolidFoodMenu />
            Host
          </li>
          <li onClick={() => setControl("Contact")}>
            <BiSolidFoodMenu />
            Contact
          </li>
          <li onClick={() => setControl("JobApplication")}>
            <BiSolidFoodMenu />
            Job Application
          </li>
          {/* <li onClick={() => setControl("Membership")}>
            <BiSolidFoodMenu />
            Membership
          </li> */}
          <li onClick={() => setControl("Membership")}>
            <BiLogOutCircle />
            <button onClick={HandleLogout}>Log Out</button>
          </li>
        </ul>
      </section>
      <section
        className="right"
        style={{ display: Control === "Contact" ? "block" : "none" }}
      >
        <h1>Contact Enquiry Form</h1>
        <table className="journal-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Country</th>
              <th>Service</th>
              <th>Others</th>
              <th>Data & Time</th>
            </tr>
          </thead>
          <tbody>
            {contactDetails.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.phoneNumber}</td>
                  <td>{items.country}</td>
                  <td>{items.serviceRequired}</td>
                  <td>{items.others}</td>
                  <td>
                    {new Date(items.createdAt).toLocaleDateString()}
                    <br />
                    <br />
                    {new Date(items.createdAt).toLocaleTimeString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section
        className="right"
        style={{ display: Control === "JobApplication" ? "block" : "none" }}
      >
        <h1>Job Application</h1>
        <table className="journal-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Resume / CV</th>
              <th>Message</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {jobApplies.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.number}</td>
                  <td
                    className="down"
                    onClick={() =>
                      handleDownload(items.file, items.fileName, items.fileType)
                    }
                  >
                    <MdDownloading />
                    Download
                  </td>
                  <td>{items.message}</td>
                  <td>
                    {new Date(items.createdAt).toLocaleDateString()}
                    <br />
                    <br />
                    {new Date(items.createdAt).toLocaleTimeString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section
        className="right"
        style={{ display: Control === "Membership" ? "block" : "none" }}
      >
        <h1>Membership Enquiry</h1>
        <table className="journal-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Membership</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Country</th>
              <th>Qualification</th>
              <th>College</th>
              <th>Company</th>
              <th>Department</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {MembershipEnquiry.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{items.membership}</td>
                  <td>
                    {items.firstName}
                    {items.lastName}
                  </td>
                  <td>{items.email}</td>
                  <td>{items.mobile}</td>
                  <td>{items.country}</td>
                  <td>{items.qualification}</td>
                  <td>{items.college}</td>
                  <td>{items.company ? items.company : "None"}</td>
                  <td>{items.department}</td>
                  <td>
                    {new Date(items.createdAt).toLocaleDateString()}
                    <br />
                    <br />
                    {new Date(items.createdAt).toLocaleTimeString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section
        className="right"
        style={{ display: Control === "Journal" ? "block" : "none" }}
      >
        <h1>Journal Enquiry</h1>
        <table className="journal-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Country</th>
              <th>Institution</th>
              <th>Publication</th>
              <th>Documents</th>
              <th>Others</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {JournalEnquiry.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.mobile}</td>
                  <td>{items.country}</td>
                  <td>{items.Institution}</td>
                  <td>{items.Publication}</td>
                  <td
                    onClick={() =>
                      handleDownload(items.file, items.fileName, items.fileType)
                    }
                    className="down"
                  >
                    <MdDownloading /> Download
                  </td>
                  <td style={{ textWrap: "nowrap" }}>
                    Open Detail...
                    <li>{items.others}</li>
                  </td>
                  <td>
                    {new Date(items.createdAt).toLocaleDateString()}
                    <br />
                    <br />
                    {new Date(items.createdAt).toLocaleTimeString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section
        className="right"
        style={{ display: Control === "Presentation" ? "block" : "none" }}
      >
        <h1>Presentation Enquiry</h1>
        <table className="Presentation-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Affiliation</th>
              <th>Phone Number</th>
              <th>Presentation Title</th>
              <th>Mode of Presentation</th>
              <th>Abstract File</th>
              <th>Participation</th>
              <th>
                Pre-Conference
                <br />
                Workshops
              </th>
            </tr>
          </thead>
          <tbody>
            {PresentationEnquiry.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{items.fullName}</td>
                  <td>{items.email}</td>
                  <td>{items.mobile}</td>
                  <td>{items.affiliation}</td>
                  <td>{items.presentationTitle}</td>
                  <td>{items.modeOfPresentation}</td>
                  <td
                    onClick={() =>
                      handleDownload(
                        items.abstractFile,
                        items.fileName,
                        items.fileType
                      )
                    }
                    className="down"
                  >
                    <MdDownloading /> Download
                  </td>
                  <td>{items.participation}</td>
                  <td>{items.preConferenceWorkshops ? "True" : "False"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section
        className="right"
        style={{ display: Control === "Advertise" ? "block" : "none" }}
      >
        <h1>Advertise Enquiry</h1>
        <table className="journal-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Company</th>
              <th>Interest</th>
              <th>Details</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {AdvertiseEnquiry.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.mobile}</td>
                  <td>{items.company}</td>
                  <td>{items.interest}</td>
                  <td style={{ width: "400px" }}>{items.details}</td>
                  <td>
                    {new Date(items.createdAt).toLocaleDateString()}
                    <br />
                    <br />
                    {new Date(items.createdAt).toLocaleTimeString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section
        className="right"
        style={{ display: Control === "Host" ? "block" : "none" }}
      >
        <h1>Host Enquiry</h1>
        <table className="host-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Institution Name</th>
              <th>Contact Person</th>
              <th>Title Position</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Department</th>
              <th>Preferred Dates</th>
              <th>Conference Theme</th>
              <th>Additional Info</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {HostEnquiry.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{items.institutionName}</td>
                  <td>{items.contactPerson}</td>
                  <td>{items.titlePosition}</td>
                  <td>{items.email}</td>
                  <td>{items.mobile}</td>
                  <td>{items.department}</td>
                  <td>{new Date(items.preferredDates).toLocaleDateString()}</td>
                  <td>{items.conferenceTheme}</td>
                  <td>{items.additionalInfo}</td>
                  <td>
                    {new Date(items.createdAt).toLocaleDateString()}
                    <br />
                    <br />
                    {new Date(items.createdAt).toLocaleTimeString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
