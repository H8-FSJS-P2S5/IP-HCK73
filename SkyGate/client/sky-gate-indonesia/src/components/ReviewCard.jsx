const ReviewCard = ({ item }) => {
    return (
        <div className="w-[50vw] lg:ml-40 my-4 shadow-gray-500/15 font-outfit flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-md rounded-xl">
            <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">
                    Rating:
                    <div className="bg-blue-500 w-14 flex justify-center rounded-md text-white"> 
                        {item.rate} / 10
                    </div>
                </h3>
                <p className="mt-2 text-gray-500">
                    {item.comment}
                </p>
                <p className="mt-2 text-xs text-gray-300">
                    Last updated {item.updatedAt.slice(0, 10)}
                </p>

            </div>
        </div>
    )
}

export default ReviewCard