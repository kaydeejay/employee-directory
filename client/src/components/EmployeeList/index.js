import React, { useContext } from 'react';
// import EmployeeListItem from '../EmployeeListItem';
import EmployeeListContext from '../../utils/EmployeeListContext';

const EmployeeList = () => {
  const employeeListContext = useContext(EmployeeListContext);
  const employeeList = [];
  for (let x in employeeListContext) {
    employeeList.push(employeeListContext[x]);
  }
  console.log(employeeList);
  console.log(typeof (employeeList));
  return (
    <div>something</div>
  );
}

export default EmployeeList;