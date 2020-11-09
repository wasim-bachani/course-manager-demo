import React from "react";

const ManagerCoursePage = (props) => {
  return (
    <>
      <h2>Manage Course</h2>
      {props.match.params.slug}
    </>
  );
};

export default ManagerCoursePage;
