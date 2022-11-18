import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TextInput() {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email
      </label>
      <div className="mt-1">
        <input
          type="email"
          name="email"
          id="email"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-100"
          disabled
          placeholder="you@example.com"
        />
      </div>

      <div className="flex items-center pointer-events-none mt-1">
        <FontAwesomeIcon
          icon={faCircleInfo}
          size="sm"
          className="text-red-500"
          aria-hidden="true"
        />

        <p className="ml-2 text-sm text-red-600 align-middle" id="email-error">
          Your password must be less than 4 characters.
        </p>
      </div>
    </div>
  );
}
