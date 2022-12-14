import { useService } from "aidbox-react/lib/hooks/service";
import { isSuccess, success } from "aidbox-react/lib/libs/remoteData";
import {
  resetInstanceToken,
  setInstanceToken,
} from "aidbox-react/lib/services/instance";
import { extractErrorCode } from "aidbox-react/lib/utils/error";
import { getToken, getUserInfo } from "../../services/auth";

export function useApp() {
  const [userResponse] = useService(async () => {
    const appToken = getToken();
    if (!appToken) {
      return success(null);
    }

    console.log("appToken - 1", appToken);

    setInstanceToken({ access_token: appToken, token_type: "Bearer" });

    const response = await getUserInfo();

    console.log("response -1 ", response);

    if (isSuccess(response)) {
    } else {
      if (extractErrorCode(response.error) !== "network_error") {
        resetInstanceToken();

        return success(null);
      }
    }

    return response;
  });

  return { userResponse };
}
