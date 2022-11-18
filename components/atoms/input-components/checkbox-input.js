export default function CheckboxInput() {
  return (
    <>
      <legend className="sr-only">Notifications</legend>
      <div>
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label
          htmlFor="comments"
          className="ml-3 text-sm font-medium text-gray-700"
        >
          New comments
        </label>
      </div>
    </>
  );
}
