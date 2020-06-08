import React from "react";
import useProgramme from "../hooks/use_programme";

const ProgrammeShort = ({ id }) => {
  const programme = useProgramme(id);
  return <div>{programme.name}</div>;
};

export default ProgrammeShort;
