import { setInstanceBaseURL } from "aidbox-react/lib/services/instance";

// import config from './config';

export const init = (baseURL?: string): void => {
  setInstanceBaseURL("http://localhost:8888");
};
