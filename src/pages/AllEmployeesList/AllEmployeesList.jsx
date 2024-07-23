import "./AllEmployeesList.css";
import { EmployeeListCard } from "../../components/Card/Card";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";

const AllEmployeesList = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [error, setError] = useState(null); // Define error state

  const fetchEmployee = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/employer/get-all-employees",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const { data } = await response.json();
      console.log(data);
      setEmployeeData(data);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <div className="AllEmployeesList">
      <h2>Employees List</h2>
      {error && <p className="error">{error}</p>} {/* Display error message */}
      <div className="AllEmployeesList_main">
        {employeeData.length > 0 ? (
          employeeData.map((employee, index) => (
            <EmployeeListCard
              key={index}
              id={employee._id}
              name={employee.name}
              location={employee.location}
              position={employee.position}
              rating={employee.averageRating}
            />
          ))
        ) : (
          <div className="No_Employee_sec">
            <img src="https://i.postimg.cc/9Fn0MwHv/Group-7.png" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEmployeesList;
