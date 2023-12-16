import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

export default function App() {
  async function handleLoginSuccess(credentialResponse: CredentialResponse) {
    const sub = jwtDecode(credentialResponse.credential!).sub;
    toast.success(`Welcome, ${sub}`);
  }

  function handleLoginError() {
    toast.error("Login Failed");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "10px",
      }}
    >
      <h1>React OAuth2 | Google</h1>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
    </div>
  );
}
