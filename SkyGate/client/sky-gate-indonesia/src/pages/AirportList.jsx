import { useEffect, useState } from "react"
import MainCard from "../components/MainCard"
import ApiRequest from "../helpers/ApiRequest"
import Pagination from "../components/Pagination"
import SearchBar from "../components/SearchBar"

const AirportList = () => {
    const [airport, setAirport] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState()
    const [search, setSearch] = useState('')

    const readAirports = async () => {
        try {
            let { data } = await ApiRequest({
                url: `/airports?page[number]=${currentPage}&page[size]=10&search=${search}`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            console.log(data);
            setAirport(data.data)
            setTotalPage(data.totalPage)
        } catch (error) {
            console.log(error);
        }
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    useEffect(() => {
        readAirports()
    }, [currentPage, search])

    return (
        <>
            <div className="mt-7">
                <SearchBar />
            </div>
            <div className="grid my-10 mx-auto w-full justify-center px-3 py-3">
                {
                    airport.map((item) => (
                        <MainCard key={item.id} item={item} />
                    ))
                }
            </div>
            <div>
                <Pagination currentPage={currentPage} nextPage={nextPage} prevPage={prevPage} totalPage={totalPage} />
            </div>
        </>
    )
}

export default AirportList