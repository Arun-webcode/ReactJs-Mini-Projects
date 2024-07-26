const TextArea = ({ id, rows, placeholder }) => {
  return (
    <div className="max-w-sm mx-auto mt-2">
      <div className="max-w-sm mx-auto mt-3">
        <textarea
          id={id}
          rows={rows}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  );
};
export default TextArea;
