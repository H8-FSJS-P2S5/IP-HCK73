import { Link, useNavigate, useParams } from "react-router-dom";
import AirportDetail from "./AirportDetail";
import { useEffect, useState } from "react";
import ApiRequest from "../helpers/ApiRequest";
import Swal from 'sweetalert2';

const EditReview = () => {
    const { airportCode, id } = useParams();
    const [rate, setRate] = useState('');
    const [comment, setComment] = useState('');
    const navigate = useNavigate();

    const getReviewDetail = async () => {
        try {
            let { data } = await ApiRequest({
                url: `/airports/${airportCode}/reviews/${id}`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });
            console.log(data, '<<');
            
            setRate(data.rate);
            setComment(data.comment);
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Oh No!',
                text: error.response?.data?.message || 'Failed to fetch review details.',
                icon: 'error'
            });
        }
    };

    useEffect(() => {
        getReviewDetail()
    }, [airportCode, id]);

    const editReview = async (e) => {
        e.preventDefault();
        const reqBody = { rate, comment };
        try {
            await ApiRequest({
                url: `/airports/${airportCode}/reviews/${id}`,
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                },
                data: reqBody
            });
            Swal.fire({
                title: 'Yes sir!',
                text: 'Review edited successfully',
                icon: 'success'
            });
            navigate(`/airports/${airportCode}`);
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Oh No!',
                text: error.response?.data?.message || 'Failed to edit review.',
                icon: 'error'
            });
        }
    }

    return (
        <>
            <AirportDetail />
            <div className="font-outfit fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
                    <div className="flex items-center">
                        <h3 className="text-blue-600 text-xl font-bold flex-1">
                            Edit Your Review
                        </h3>
                        <Link to={`/airports/${airportCode}`}>
                            <svg
                                className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                                viewBox="0 0 320.591 320.591"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                    data-original="#000000"
                                />
                                <path
                                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                    data-original="#000000"
                                />
                            </svg>
                        </Link>
                    </div>
                    <form onSubmit={editReview} className="space-y-4 mt-8">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                Rate
                            </label>
                            <input
                                value={rate}
                                name="rate"
                                onChange={(e) => setRate(e.target.value)}
                                className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
                                placeholder="from 1 to 10"
                                type="number"
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                Review
                            </label>
                            <textarea
                                value={comment}
                                name="comment"
                                onChange={(e) => setComment(e.target.value)}
                                className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
                                placeholder="Tell us about the airport!"
                                rows="3"
                            />
                        </div>
                        <div className="flex justify-end gap-4 !mt-8">
                            <Link
                                to={`/airports/${airportCode}`}
                                className="px-6 py-3 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300"
                                type="button"
                            >
                                Cancel
                            </Link>
                            <button
                                className="px-6 py-3 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditReview;
