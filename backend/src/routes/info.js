// * ////////////////////////////////////////////////////////////////////////
// *
// * FileName     [ info.js ]
// * PackageName  [ server ]
// * Synopsis     [ Get restaurant info from database ]
// * Author       [ Chin-Yi Cheng ]
// * Copyright    [ 2022 11 ]
// *
// * ////////////////////////////////////////////////////////////////////////

import Info from '../models/info'
import Comment from '../models/comment'

exports.GetSearch = async (req, res) => {
    /*******    NOTE: DO NOT MODIFY   *******/
    const filters = req.query.filters
    const lineFilter = req.query.lineFilter
    /****************************************/

    try{
        if (typeof(lineFilter) !== 'undefined'){
            const lineStr = lineFilter.slice(0,-9)

            if (typeof(filters) !== 'undefined'){
                let filterData = await Info.find({ tag: { $in:  filters }, line: lineStr })
                // console.log(filterData)
                res.status(200).send({ message: 'success', contents: filterData })
            }
            else { // return all restaurants if no filters
                let resData = await Info.find({ line: lineStr })
                // console.log(resData)
                res.status(200).send({ message: 'success', contents: resData }) 
            }
        }
        else {
            if (typeof(filters) !== 'undefined'){
                let filterData = await Info.find({ tag: { $in:  filters } })
                // console.log(filterData)
                res.status(200).send({ message: 'success', contents: filterData })
            }
            else { // return all restaurants if no filters
                let resData = await Info.find()
                // console.log(resData)
                res.status(200).send({ message: 'success', contents: resData }) 
            }
    }
    } catch(err){
        res.status(403).send({ message: 'error', contents: err })
    }
    

    // TODO Part I-3-a: find the information to all restaurants?
    
    
    // TODO Part II-2-a: revise the route so that the result is filtered with priceFilter, mealFilter and typeFilter
    // TODO Part II-2-b: revise the route so that the result is sorted by sortBy
}

exports.GetInfo = async (req, res) => {
    /*******    NOTE: DO NOT MODIFY   *******/
    const id = req.query.id
    /****************************************/

    // NOTE USE THE FOLLOWING FORMAT. Send type should be 
    // if success:
    // {
    //    message: 'success'
    //    contents: the data to be sent. Hint: A dictionary of the restaruant's information.
    // }
    // else:
    // {
    //    message: 'error'
    //    contents: []
    // }
    try{
        const resData = await Info.find({id:id})
        res.status(200).send({ message: 'success', contents: resData }) 
    } catch(err){
        res.status(403).send({ message: 'error', contents: err })
    }

    // TODO Part III-2: find the information to the restaurant with the id that the user requests
}