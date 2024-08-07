const { Op } = require('sequelize')
const { Airport, Review } = require('../models')
const openAI = require('../helpers/openai')
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

    static async getAirportDetail(req, res, next) {
        const { airportCode } = req.params
        try {
            let airportDetail = await Airport.findOne({
                where: {
                    airportCode,
                },
                include: {
                    model: Review
                }

            })
            if (!airportDetail) {
                throw { name: 'airport-not-found' }
            }
            res.status(200).json(airportDetail)
        } catch (error) {
            console.log(error);

            next(error)
        }
    }

    static async addReview(req, res, next) {
        const { airportCode } = req.params
        const { rate, comment } = req.body
        try {
            let airport = await Airport.findOne({
                where: { airportCode }
            })
            if (!airport) {
                throw { name: 'airport-not-found' }
            }

            const newReview = await Review.create({
                UserId: req.user.id,
                AirportId: airport.id,
                rate,
                comment
            })
            res.status(201).json(newReview)
        } catch (error) {
            next(error)
        }
    }

    static async updateReview(req, res, next) {
        const { id } = req.params
        try {
            let review = await Review.findByPk(id)
            if (!review) {
                throw { name: 'review-not-found' }
            }

            let updateReview = await Review.update(req.body, {
                where: { id }
            })
            updateReview = await Review.findByPk(id)
            res.status(200).json(updateReview)
        } catch (error) {
            next(error)
        }
    }

    static async deleteReview(req, res, next) {
        const { id } = req.params
        try {
            let review = await Review.findByPk(id)
            if (!review) {
                throw { name: 'review-not-found' }
            }
            await Review.destroy({
                where: { id }
            })
            res.status(200).json({ message: 'Review has been deleted' })
        } catch (error) {
            next(error)
        }
    }

    static async chatbot(req, res, next) {
        const { airportCode } = req.params
        const { question } = req.body
        try {
            const airport = await Airport.findOne({
                where: { airportCode }
            })
            if (!airport) {
                throw { name: 'airport-not-found' }
            }
            const prompt = `${question} near ${airport.name}. Please make the output consistent as json like this:   
            {
                "airport": "<airport name>",
                "location": "<airport location>",
                "activities": [
                    {
                    "name": "<activities name>",
                    "description": "<activities description>",
                    "distanceFromAirport": "<activities distance from airport>",
                    "category": "<activities category>",
                    "imageUrl": "<activities image url (please provide real picture)>"
                    }
                ],
                "sightseeing": [
                    {
                    "name": "<sightseeing name>",
                    "description": "<sightseeing description>",
                    "distanceFromAirport": "<sightseeing distance from airport>",
                    "category": "<sightseeing category>",
                    "imageUrl": "<sightseeing image url (please provide real picture)>"
                    }
                ],
                "accommodations": [
                    {
                    "name": "<accommodations name>",
                    "description": "<accommodations description>",
                    "distanceFromAirport": "<accommodations distance from airport>",
                    "category": "<accommodations category>",
                    "imageUrl": "<accommodations image url (please provide real picture)>"
                    }
                ]
            }`
        
        const openAiResponse = await openAI(prompt)
        const jsonResponse = JSON.parse(openAiResponse)
        res.status(200).json({ response: jsonResponse })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

module.exports = AirportController