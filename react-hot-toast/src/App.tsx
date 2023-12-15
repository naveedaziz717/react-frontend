import toast from "react-hot-toast";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="container">
      <Button
        toastConfiguration={() =>
          toast("Dipesh Paudel", {
            icon: "🥹",
            style: {
              fontSize: "20px",
            },
          })
        }
      />
      <Button
        style="red"
        toastConfiguration={() =>
          toast.error("Error Message!", {
            style: {
              fontSize: "20px",
            },
          })
        }
      >
        Error
      </Button>
      <Button
        style="green"
        toastConfiguration={() =>
          toast.success("Success Message!", {
            style: {
              fontSize: "20px",
            },
          })
        }
      >
        Success
      </Button>
      <Button
        style="blue"
        toastConfiguration={() =>
          toast.success("Themed Message!", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
              fontSize: "20px",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          })
        }
      >
        Themed
      </Button>
    </div>
  );
}
