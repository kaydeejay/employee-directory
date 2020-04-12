import React/*, { useState, useEffect }*/ from 'react'
// import API from '../../utils/API';
import Container from '../../components/Container';

export const Page = () => {

  // possibly need to run all of this when the employee list
  // mounts, instead of the container.

  // const [employeeList, setEmployeeList] = useState();

  // useEffect(() => {
  //   API.findAll()
  //     .then(res => {
  //       console.log(JSON.parse(res));
  //     });
  // }, []);

  return (
    <div>
      <Container />
    </div>
  )
}

export default Page;