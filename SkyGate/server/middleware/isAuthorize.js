const { Review } = require('../models')

async function isAuthorize(req, res, next) {
    try {
        let review = await Review.findByPk(req.params.id)
        if (!review) {
            throw { name: 'review-not-found' }
        }
        if (review.UserId !== req.user.id) {
            throw {name: "forbidden"}
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = isAuthorize