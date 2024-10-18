// components/LogoutButton.jsx
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const LogoutButton = () => {
  return (
    <LogoutLink>
      <button className="flex items-center justify-center px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-200 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2" // Icon size and margin
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 15.293a1 1 0 010-1.414L12.586 12H4a1 1 0 110-2h8.586l-2.293-1.879a1 1 0 111.414-1.414l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414z"
            clipRule="evenodd"
          />
          <path d="M17 10a1 1 0 100 2 1 1 0 000-2z" />
          <path d="M3 4a1 1 0 100 2 1 1 0 000-2zM3 16a1 1 0 100 2 1 1 0 000-2z" />
        </svg>
        Log out
      </button>
    </LogoutLink>
  );
};

export default LogoutButton;
