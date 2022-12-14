import { isSuccess } from "aidbox-react/lib/libs/remoteData";
import {
  getSessionid,
  setToken,
  signin,
  SigninBody,
} from "../../services/auth";

const sessionId = getSessionid();

export const useSignIn = () => {
  const onFinish = async (values: SigninBody) => {
    const signinResponse = await signin({ ...values });
    if (isSuccess(signinResponse)) {
      const { access_token, token_type } = signinResponse.data;
      setToken({ access_token, token_type });
      console.log(
        JSON.stringify({
          text: "SignIn success",
          email: values.email,
          sessionId,
        })
      );
      window.location.reload();
    } else {
      window.alert({
        message: signinResponse.error.error_description
          ? signinResponse.error.error_description
          : JSON.stringify(signinResponse.error),
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.warn("SignIn failed: ", errorInfo);
  };

  return { onFinish, onFinishFailed };
};
