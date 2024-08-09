const Pagination = ({ currentPage, nextPage, prevPage, totalPage }) => {

    return (
        <div className="w-full bg-white font-outfit">
            <div className="container flex flex-col items-center px-6 py-5 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 ">
                <div className="-mx-2">
                    {
                        currentPage !== 1 && (
                            <button onClick={() => { prevPage() }} className="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform hover:bg-gray-100 rounded-lg">
                                Previous
                            </button>

                        )
                    }
                    {
                        currentPage !== totalPage && (
                            <button onClick={() => { nextPage() }} className="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100">
                                Next
                            </button>
                        )
                    }
                </div>
                <div className="text-gray-500">
                    <span className="font-medium text-gray-700">
                        {/* 1 - 25 */}
                    </span>
                    page {currentPage} of {totalPage}
                </div>
            </div>
        </div>
    )
}

export default Pagination