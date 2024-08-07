const { Op } = require('sequelize')
const { Airport } = require('../models')
class AirportController {
    static async getAirport(req, res, next) {
        const { page, search } = req.query
        try {
            let paramsQuerySQL = {}
            if (search) {
                paramsQuerySQL.where = {
                    [Op.or]: {
                        name: {
                            [Op.iLike]: `%${search}%`
                        },
                        iataCode: {
                            [Op.iLike]: `%${search}%`
                        },
                        icaoCode: {
                            [Op.iLike]: `%${search}%`
                        },
                    }
                }
            }

            let limit = 10
            let pageNumber = 1
            if (page) {
                if (page.size) {
                    limit = +page.size
                    paramsQuerySQL.limit = limit
                }
                if (page.number) {
                    pageNumber = +page.number;
                    paramsQuerySQL.offset = limit * (pageNumber - 1);
                }
            } else {
                paramsQuerySQL.limit = limit
                paramsQuerySQL.offset = limit * (pageNumber - 1);
            }

            const { count, rows } = await Airport.findAndCountAll(paramsQuerySQL)
            res.status(200).json({
                page: pageNumber,
                data: rows,
                totalData: count,
                totalPage: Math.ceil(count / limit),
                dataPerPage: limit,
            })
        } catch (error) {            
            next(error)
        }
    }
}

module.exports = AirportController