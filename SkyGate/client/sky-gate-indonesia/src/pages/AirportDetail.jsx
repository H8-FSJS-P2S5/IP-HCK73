import { useEffect, useState } from "react"
import ChatSection from "../components/ChatSection"
import DetailCard from "../components/DetailCard"
import { useNavigate, useParams } from "react-router-dom"
import Swal from 'sweetalert2'
import ApiRequest from "../helpers/ApiRequest"
import ReviewCard from "../components/ReviewCard"
import AiResponseCard from "../components/AiResponseCard"

const AirportDetail = () => {
    const [airportDetail, setAirportDetail] = useState({});
    const [question, setQuestion] = useState('');
    const [suggestion, setSuggestion] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const { airportCode } = useParams();
    const navigate = useNavigate();

    const fetchDetailAirport = async () => {
        try {
            let { data } = await ApiRequest({
                url: `/airports/${airportCode}`,
                method: `GET`,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });
            setAirportDetail(data);
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Oh No!',
                text: error.response.data.message,
                icon: 'error'
            });
            navigate('/airports');
        }
    };

    const chatbot = async () => {
        try {
            let { data } = await ApiRequest({
                url: `/airports/${airportCode}/chatbot`,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                },
                data: { question }
            });
            console.log(data, '<<<<<<<');
            setSuggestion(data.response);
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Oh No!',
                text: error.response.data.message,
                icon: 'error'
            });
        }
    };


    useEffect(() => {
        fetchDetailAirport();
        chatbot()
    }, []);

    const reviews = Array.isArray(airportDetail.Reviews) ? airportDetail.Reviews : [];

    return (
        <>
            <div className="flex mt-10 gap-x-5 justify-center">
                <DetailCard airportDetail={airportDetail} />
                <ChatSection chatbot={chatbot} question={question} setQuestion={setQuestion} />
            </div>
            <div className="flex my-5 pl-3 mx-5">
                <div>
                    {reviews.length > 0 ? (
                        reviews.map((item) => (
                            <ReviewCard key={item.id} item={item} />
                        ))
                    ) : (
                        <div className="w-[43vw] lg:ml-40 my-4 shadow-gray-500/15 font-outfit flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-md rounded-xl">
                            <div className="p-4 md:p-5">
                                <h3 className="text-lg font-bold text-gray-800">
                                    No Reviews Available. Be the first to review!
                                </h3>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex justify-center w-[30vw]">
                    <AiResponseCard suggestion={suggestion} />
                </div>
            </div>
        </>
    );
};

export default AirportDetail;
