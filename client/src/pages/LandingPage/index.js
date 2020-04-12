import React, { useState, useEffect } from 'react';
import EmployeeList from '../../components/EmployeeList';
import Navbar from '../../components/Navbar';
import API from '../../utils/API';
import EmployeeListContext from '../../utils/EmployeeListContext';

export const Page = () => {
  const [employeeList, setEmployeeList] = useState({
    employees: []
  });

  useEffect(() => {
    API.findAll()
      .then(dbRes => {
        setEmployeeList(JSON.parse(dbRes));
      });
  }, []);

  return (
    <div className="wrapper">
      <EmployeeListContext.Provider value={employeeList}>
        <Navbar />
        <EmployeeList />
      </EmployeeListContext.Provider>
    </div>
  )
}

export default Page;