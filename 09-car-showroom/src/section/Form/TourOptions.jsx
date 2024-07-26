const TourOptions = ({ tO }) => {
  return (
    <fieldset className="tour-type flex justify-evenly">
      {tO.map(({ tourId, tourValue }) => (
        <div className="flex items-center mb-4" key={tourId}>
          <input
            id={tourId}
            type="radio"
            name="tour-options"
            value={tourValue}
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor={tourId} className="block ms-2 text-sm font-medium">
            {tourValue}
          </label>
        </div>
      ))}
    </fieldset>
  );
};
export default TourOptions;
