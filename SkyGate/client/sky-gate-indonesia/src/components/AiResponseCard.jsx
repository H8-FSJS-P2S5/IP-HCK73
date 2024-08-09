const AiResponseCard = ({ suggestion }) => {
    const activities = suggestion.activities || {};
    const accommodations = suggestion.accommodations || {};
    const sightseeing = suggestion.sightseeing || {};

    return (
        <div className="w-full mx-5 my-4 shadow-gray-500/15 font-outfit flex flex-col bg-white border border-t-4 shadow-md rounded-xl">
            <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">
                    Here are some recommendations from FLAI near here
                </h3>
                <div className="mt-3 text-sm">
                    <h4 className="text-md font-semibold text-gray-700">Activities:</h4>
                    {activities.name ? (
                        <>
                            <p className="mt-2 text-gray-500">Name: {activities.name}</p>
                            <p className="mt-2 text-gray-500">Description: {activities.description}</p>
                            <p className="mt-2 text-gray-500">Distance from Airport: {activities.distanceFromAirport}</p>
                        </>
                    ) : (
                        <p className="mt-2 text-gray-500">No activities available.</p>
                    )}
                </div>
                <div className="mt-3 text-sm">
                    <h4 className="text-md font-semibold text-gray-700">Hotels:</h4>
                    {accommodations.name ? (
                        <>
                            <p className="mt-2 text-gray-500">Name: {accommodations.name}</p>
                            <p className="mt-2 text-gray-500">Description: {accommodations.description}</p>
                            <p className="mt-2 text-gray-500">Distance from Airport: {accommodations.distanceFromAirport}</p>
                        </>
                    ) : (
                        <p className="mt-2 text-gray-500">No accommodations available.</p>
                    )}
                </div>
                <div className="mt-3 text-sm">
                    <h4 className="text-md font-semibold text-gray-700">Sightseeing:</h4>
                    {sightseeing.name ? (
                        <>
                            <p className="mt-2 text-gray-500">Name: {sightseeing.name}</p>
                            <p className="mt-2 text-gray-500">Description: {sightseeing.description}</p>
                            <p className="mt-2 text-gray-500">Distance from Airport: {sightseeing.distanceFromAirport}</p>
                        </>
                    ) : (
                        <p className="mt-2 text-gray-500">No sightseeing options available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AiResponseCard;
