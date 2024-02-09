import { FaSortDown } from "react-icons/fa";
import { DropDownItem } from "./DropDownItem";
import { dropdownItems } from "../../utils/navbarUtils";

interface DropDownProps {
  children: string;
}

export const DropDown = ({ children }: DropDownProps) => {
  return (
    <div className="relative group">
      <div className="text-gray-300 flex gap-2 hover:text-white p-3 font-medium transition duration-150 ease-in-out cursor-pointer">
        {children} <FaSortDown />
      </div>
      <ul className="absolute whitespace-nowrap hidden p-1 group-hover:block bg-gray-50 rounded z-10 left-0">
        {dropdownItems.map((dropdownItem) => (
          <DropDownItem key={dropdownItem}>{dropdownItem}</DropDownItem>
        ))}
      </ul>
    </div>
  );
};
