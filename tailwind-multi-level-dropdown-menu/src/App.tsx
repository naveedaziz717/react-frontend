import { Link } from "react-router-dom";
import { DropDown, SingleNavItem } from "./components";

export default function App() {
  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto w-[80%]">
        <div className="relative flex items-center justify-between h-16">
          <div>
            <Link to="/" className="text-white text-2xl font-bold">
              Company
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <SingleNavItem>Dumb</SingleNavItem>
              <DropDown>Parent</DropDown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
