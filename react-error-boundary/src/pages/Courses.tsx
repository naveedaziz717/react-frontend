import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import courses from "../data/data";
import "./Courses.scss";

export default function Courses() {
  return (
    <div className="courses">
      <h2 className="heading">Popular Courses</h2>
      <div className="course-list">
        {courses.map(
          ({ id, title, url, duration, enrolledCount, courseImage }) => {
            return (
              <Link to={url} key={id} className="course">
                <div className="image-section">
                  <img src={courseImage} alt={title} className="course-image" />
                </div>
                <h3 className="title">{title}</h3>
                <div className="course-info">
                  <div className="course-logo-count">
                    <BsFillPersonFill size={20} className="logo" />
                    <span className="count">{enrolledCount}</span> students
                  </div>
                  <div>{duration}</div>
                </div>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}
