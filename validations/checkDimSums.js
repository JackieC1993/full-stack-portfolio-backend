//validation/checkDimSums.js
const checkName = (req, res, next) => {
    if(req.body.name){
        return next()
    } else {
        res.status(400).json({ error: 'Name is required'})
    }
}
//
const checkBoolean = (req, res, next) => {
    const fav = req.body.savory
    if (typeof fav === 'boolean') {
        next()
    }else {
        res.status(400).json({ error: 'savory must be type boolean'})
     }
    }

module.exports = { checkName, checkBoolean }