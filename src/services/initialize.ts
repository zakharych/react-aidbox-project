import { setInstanceBaseURL } from "aidbox-react/lib/services/instance";

const spaConfig = (window as any).__SPACONFIG__;

setInstanceBaseURL(spaConfig.baseURL);
