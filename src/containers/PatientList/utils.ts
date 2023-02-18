import { Patient } from "shared/src/contrib/aidbox";

export interface FormattedPatient {
  name: string;
  birthDate: string | undefined;
  gender: string | undefined;
}

export function transformPatient(patientsList: Patient[]): FormattedPatient[] {
  return patientsList.map((patient) => {
    return {
      name:
        `${patient.name?.[0]?.given?.[0]} ${patient.name?.[0]?.family}` || "",
      birthDate: patient.birthDate,
      gender: patient.gender,
    };
  });
}
