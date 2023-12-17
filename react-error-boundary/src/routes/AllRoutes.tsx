import { Navigate, Route, Routes } from "react-router-dom";
import { CourseDetails, Courses } from "../pages";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Courses />} />
      <Route path="/courses/:title" element={<CourseDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
