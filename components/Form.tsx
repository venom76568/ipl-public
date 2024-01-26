"use client";

import { useState } from "react";
// import "./style.css";
// import { useState } from "react";
import axios from "axios"; // Import Axios

function Register() {
  const [isTeam, setIsTeam] = useState(true);
  const [teamLeaderName, setTeamLeaderName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [teamName, setTeamName] = useState("");
  const [email, setEmail] = useState("");
  const [challan, setChallan] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [teamSize, setTeamSize] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [teamNameError, setTeamNameError] = useState("");
  const [teamLeaderNameError, setTeamLeaderNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [teamSizeError, setTeamSizeError] = useState("");
  const [challanError, setChallanError] = useState("");

  function handleTeamSizeChange(event) {
    setTeamSize(event.target.value);
    setTeamSizeError("");
  }

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  const handleOptionChange = (e) => {
    setIsTeam(e.target.value === "team");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      // Construct the data to send in the request
      const userData = {
        teamName, // String: Team name
        teamSize, // Number: Team size (minimum of 3, maximum of 5)
        teamLeaderName, // String: Team leader name
        email, // String: Email address
        phoneNumber, // String: Phone number
        isChecked,
        challan,
      };

      setTeamNameError("");
      setTeamLeaderNameError("");
      setPhoneNumberError("");
      setEmailError("");
      setTeamSizeError("");
      setChallanError("");

      if (teamSize === "") {
        throw new Error("Please select a valid Team Size");
      }

      if (!teamName) {
        throw new Error("Team Name is required");
      }

      // Validation logic for Team Leader Name
      if (!teamLeaderName) {
        throw new Error("Team Leader Name is required");
      }

      // Validation logic for Phone Number
      if (!phoneNumber) {
        throw new Error("Phone Number is required");
      }

      if (!challan) {
        throw new Error("Please give challan number of your payment");
      }
      // Validation logic for Email
      if (!email) {
        throw new Error("Email Address is required");
      }

      if (isTeam) {
        // Make sure that each team member input field has a value
        for (let i = 0; i < parseInt(teamSize) - 1; i++) {
          const teamMemberInput = document.getElementById(`teamMember${i + 1}`);
          if (!teamMemberInput.value) {
            throw new Error(`Team member ${i + 1} name is required`);
          }
        }
        // Add the team member names to the user data object
        for (let i = 0; i < parseInt(teamSize) - 1; i++) {
          userData[`teamMember${i + 1}`] = document.getElementById(
            `teamMember${i + 1}`
          ).value;
        }
      }
      // Make the POST request to your backend
      const response = await axios.post(
        "https://ipl-backend.onrender.com/api/register",
        userData
      ); // Adjust the URL as needed

      // Handle the response (you can display a success message or redirect to a new page)
      console.log("Registration successful:", response.data);
      setRegistrationSuccess(true);
    } catch (error) {
      setErrorMsg(false);
      if (error.response && error.response.status === 400) {
        setErrorMsg(false);
        // Server validation error, you can handle or display the error message as needed
        console.error("Error registering user:", error.response.data.error);
      } else {
        setErrorMsg(false);
        // Handle other errors
        console.error("Error registering user:", error);
      }
      if (error.message.includes("Please select a valid Team Size")) {
        setTeamSizeError(error.message);
      }
      if (error.message.includes("Team Name")) {
        setTeamNameError(error.message);
      } else if (error.message.includes("Team Leader Name")) {
        setTeamLeaderNameError(error.message);
      } else if (error.message.includes("Phone Number")) {
        setPhoneNumberError(error.message);
      } else if (error.message.includes("Email Address")) {
        setEmailError(error.message);
      } else if (
        error.message.includes("Please give challan number of your payment")
      ) {
        setChallanError(error.message);
      }
      // Add similar blocks for other fields

      console.error("Error registering user:", error);
    } finally {
      setIsLoading(false);
      setErrorMsg(true); // Reset loading state to false when the request is complete
    }
  };

  function renderTeamInputs() {
    const inputs = [];
    if (teamSize !== "select") {
      for (let i = 0; i < parseInt(teamSize) - 1; i++) {
        inputs.push(
          <div className="flex flex-col mb-2" key={i}>
            <label htmlFor={`teamMember${i + 1}`} className="mb-2">
              Team Member {i + 1}
            </label>
            <input
              type="text"
              id={`teamMember${i + 1}`}
              name={`teamMember${i + 1}`}
              className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
            />
          </div>
        );
      }
    }
    return inputs;
  }

  if (registrationSuccess) {
    return (
      <div
        id="register"
        className="flex items-center justify-center h-full bg-cover"
      >
        <div className=" rounded-lg shadow-lg p-8 backdrop-blur-sm">
          <h2 className="w-full text-5xl xl:text-6xl text-center py-10 font-semibold text-[#f06e3d] uppercase">
            Registration Successful!
          </h2>
          {/* <p className="text-black">See you on 5th Nov at 9am </p> */}
        </div>
      </div>
    );
  }
  return (
    <form
      id="register"
      onSubmit={handleSubmit}
      className=" text-black bg-[#141414] about w-[100vw] bg-cover py-16 px-5 text-center xl:text-left flex items-center justify-center h-full"
    >
      <div className="flex flex-col w-full max-w-[450px] ">
        <h1 className="w-full text-4xl xl:text-5xl text-center py-10 mt-10 font-semibold text-[#f4cb33] uppercase">
          Register Here
        </h1>

        <div className="flex flex-col text-white">
          {/* <label htmlFor="teamName" className="mb-2">
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
            /> */}
          <label htmlFor="teamName" className="mb-2 text-lg">
            Team Size
          </label>

          <select
            name="teamSize"
            className="bg-white border border-gray-300 text-black rounded px-2 py-1 mb-2"
            value={teamSize}
            onChange={handleTeamSizeChange}
            defaultValue="select"
          >
            <option selected value="select">
              Select Team Size
            </option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            {/* <option value="4">5</option> */}
          </select>
        </div>
        {teamSizeError && <div className="text-red-500">{teamSizeError}</div>}

        <div className="flex flex-col mb-4 text-white">
          <label htmlFor="teamName" className="mb-2 text-lg">
            Team Name
          </label>
          <input
            type="text"
            id="teamName"
            name="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
          />
          {teamNameError && <div className="text-red-500">{teamNameError}</div>}
          <label htmlFor="teamLeaderName" className="mb-2 text-lg">
            {isTeam ? "Team Leader Name" : "Name"}
          </label>
          <input
            type="text"
            id="teamLeaderName"
            name="teamLeaderName"
            value={teamLeaderName}
            onChange={(e) => setTeamLeaderName(e.target.value)}
            className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
          />
          {teamLeaderNameError && (
            <div className="text-red-500">{teamLeaderNameError}</div>
          )}
          {teamSize && renderTeamInputs()}
          <label htmlFor="phoneNumber" className="mb-2 text-lg">
            Phone Number
          </label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
          />
          {phoneNumberError && (
            <div className="text-red-500">{phoneNumberError}</div>
          )}
          <label htmlFor="email" className="mb-2 text-lg ">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
          />

          {emailError && <div className="text-red-500">{emailError}</div>}
          <label htmlFor="challan" className="mb-2 text-lg ">
            Challan Number
          </label>
          <input
            type="text"
            id="challan"
            name="challan"
            value={challan}
            onChange={(e) => setChallan(e.target.value)}
            className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
          />
          {challanError && <div className="text-red-500">{challanError}</div>}
        </div>
        <label className="mb-2 text-white text-lg">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="border bg-[#fff] text-[black] border-gray-400 rounded mb-2"
          />
          I agree to the terms and conditions mentioned in the Rule Book
        </label>

        {/* {errorMsg && <div className="text-red-500">team name and email should be unique</div>} */}
        {errorMsg ? (
          ""
        ) : (
          <div className="text-red-500">
            team name and email should be unique
          </div>
        )}
        <button
          type="submit"
          disabled={!isChecked && isLoading}
          className="rounded-md px-3.5 max-w-[170px] py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#fff] text-white"
        >
          <span className="absolute w-64  h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#f4cb33] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-white text-lg transition duration-300 group-hover:text-black ease">
            {isLoading ? "Loading" : "Register"}
          </span>
        </button>
      </div>
    </form>
  );
}

export default Register;
