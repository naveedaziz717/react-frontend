import notFoundImage from "../assets/writer.svg";
import "./ErrorPage.scss";

interface ErrorPageProps {
  error: string;
  resetErrorBoundary: () => void;
}

export default function ErrorPage({
  error,
  resetErrorBoundary,
}: ErrorPageProps) {
  console.log(error);
  return (
    <div className="error-page">
      <img src={notFoundImage} alt="Page not found" />
      <p className="error-msg">
        Something Went Wrong!
        <button className="btn" onClick={() => resetErrorBoundary()}>
          Refresh Page
        </button>
      </p>
    </div>
  );
}
