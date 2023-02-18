import { Button, Table } from "@mantine/core";
import { setInstanceBaseURL } from "aidbox-react";
import { RenderRemoteData } from "aidbox-react/lib/components/RenderRemoteData";

import { usePatients } from "./hooks";
import { FormattedPatient } from "./utils";

// TODO: Fix setInstanceBaseURL in init file
const spaConfig = (window as any).__SPACONFIG__;
setInstanceBaseURL(spaConfig.baseURL);

export function PatientList() {
  const { patientsRD } = usePatients();
  return (
    <RenderRemoteData remoteData={patientsRD}>
      {({ patients }) => <PatientsTable patients={patients} />}
    </RenderRemoteData>
  );
}

function PatientsTable(props: { patients: FormattedPatient[] }) {
  const { patients } = props;

  const ths = (
    <tr>
      <th>Patient Name</th>
      <th>DOB</th>
      <th>Gender</th>
      <th>Actions</th>
    </tr>
  );

  const rows = patients.map((patient) => (
    <tr key={patient.name}>
      <td>{patient.name}</td>
      <td>{patient.birthDate}</td>
      <td>{patient.gender}</td>
      <td>
        <Button variant="subtle">Action</Button>
      </td>
    </tr>
  ));

  return (
    <Table>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
