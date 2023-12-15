import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  id: string;
  name: string;
  profession: string;
}

export default function App() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjciLCJuYW1lIjoiRGlwZXNoIFBhdWRlbCIsInByb2Zlc3Npb24iOiJGcm9udGVuZCBEZXZlbG9wZXIifQ.KxfuQawB3qvYxcaYvHg7XWENbAbooCZHxM9PwStvMVQ";

  const { id, name, profession } = jwtDecode(token) as DecodedToken;

  return (
    <div>
      <h2>Id: {id}</h2>
      <h2>Name: {name}</h2>
      <h1>Profession: {profession}</h1>
    </div>
  );
}
