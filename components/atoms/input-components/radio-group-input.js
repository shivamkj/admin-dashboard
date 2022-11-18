const notificationMethods = [
  { id: "email", title: "Email" },
  { id: "sms", title: "Phone (SMS)" },
  { id: "push", title: "Push notification" },
];

export default function RadioGroupInput() {
  return (
    <div>
      <label className="text-sm font-medium text-gray-900">Notifications</label>
      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {notificationMethods.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                defaultChecked={notificationMethod.id === "email"}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label
                htmlFor={notificationMethod.id}
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
