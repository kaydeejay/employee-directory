import React from 'react';
import Navbar from '../Navbar';
import EmployeeList from '../EmployeeList';
import EmployeeListContext from '../../utils/EmployeeListContext';

const Container = () => {
  return (
    <div>
      <Navbar />
      <EmployeeList />
    </div>
  )
}

export default Container
