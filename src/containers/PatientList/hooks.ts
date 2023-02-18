import { extractBundleResources, getFHIRResources } from "aidbox-react";
import { Patient } from "shared/src/contrib/aidbox";
import { transformPatient } from "./utils";

import { useService } from "aidbox-react/lib/hooks/service";
import { mapSuccess } from "aidbox-react/lib/services/service";

export function usePatients() {
  const [patientsRD, manager] = useService(async () => {
    const patients = await getFHIRResources<Patient>("Patient", {});
    return mapSuccess(patients, (bundle) => {
      const patients = extractBundleResources(bundle).Patient;
      return { patients: transformPatient(patients), total: bundle.total! };
    });
  });
  return { patientsRD };
}
