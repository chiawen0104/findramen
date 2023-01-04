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
    const mrtFilter = req.query.mrtFilter
    const sortRating = req.query.sortRating
    /****************************************/
    console.log(req.query)

    try{
        if (typeof(lineFilter) !== 'undefined'){
            const lineStr = lineFilter.map(e => e.slice(0,-9))
            if (typeof(filters) !== 'undefined' && typeof(mrtFilter) == 'undefined'){
                if(sortRating){
                    let filterData = await Info.find({ tag: { $in:  filters }, line: { $in:  lineStr } }).sort({rating: -1})
                    res.status(200).send({ message: 'success', contents: filterData })
                }else{
                    let filterData = await Info.find({ tag: { $in:  filters }, line: { $in:  lineStr } })
                    res.status(200).send({ message: 'success', contents: filterData })
                }
            }else if(typeof(filters) !== 'undefined' && typeof(mrtFilter) !== 'undefined'){
                if(sortRating){
                    let filterData = await Info.find({ tag: { $in:  filters }, mrt: { $in:  mrtFilter } }).sort({rating: -1})
                    // console.log(filterData)
                    res.status(200).send({ message: 'success', contents: filterData })
                }else{
                    let filterData = await Info.find({ tag: { $in:  filters }, mrt: { $in:  mrtFilter } })
                    // console.log(filterData)
                    res.status(200).send({ message: 'success', contents: filterData })
                }
                
            }else if(typeof(filters) == 'undefined' && typeof(mrtFilter) !== 'undefined'){
                if(sortRating){
                    let filterData = await Info.find({ mrt: { $in:  mrtFilter } }).sort({rating: -1})
                    // console.log(filterData)
                    res.status(200).send({ message: 'success', contents: filterData })
                }else{
                    let filterData = await Info.find({ mrt: { $in:  mrtFilter } })
                    // console.log(filterData)
                    res.status(200).send({ message: 'success', contents: filterData })
                }
            }
            else { // return all restaurants if no filters
                if(sortRating){
                    let resData = await Info.find({ line: { $in:  lineStr } }).sort({rating: -1})
                    res.status(200).send({ message: 'success', contents: resData }) 
                }else{
                    let resData = await Info.find({ line: { $in:  lineStr } })
                    res.status(200).send({ message: 'success', contents: resData }) 
                }
            }
        }
        else {
            if (typeof(filters) !== 'undefined' && typeof(mrtFilter) !== 'undefined'){
                if(sortRating){
                    let filterData = await Info.find({ tag: { $in:  filters }, mrt: { $in:  mrtFilter } }).sort({rating: -1})
                    // console.log(filterData)
                    res.status(200).send({ message: 'success', contents: filterData })
                }else{
                    let filterData = await Info.find({ tag: { $in:  filters }, mrt: { $in:  mrtFilter } })
                    // console.log(filterData)
                    res.status(200).send({ message: 'success', contents: filterData })
                }
            }else if(typeof(filters) == 'undefined' && typeof(mrtFilter) !== 'undefined'){
                if(sortRating){
                    let filterData = await Info.find({mrt: { $in:  mrtFilter } }).sort({rating: -1})
                    // console.log(filterData)
                    res.status(200).send({ message: 'success', contents: filterData })
                }else{
                    let filterData = await Info.find({mrt: { $in:  mrtFilter } })
                    // console.log(filterData)
                    res.status(200).send({ message: 'success', contents: filterData })
                }
            }else if(typeof(filters) !== 'undefined' && typeof(mrtFilter) == 'undefined'){
                if(sortRating){
                    let filterData = await Info.find({tag: { $in:  filters } }).sort({rating: -1})
                    // console.log(filterData)
                    res.status(200).send({ message: 'success', contents: filterData })
                }else{
                    let filterData = await Info.find({tag: { $in:  filters } })
                    // console.log(filterData)
                    res.status(200).send({ message: 'success', contents: filterData })
                }
            }else { // return all restaurants if no filters
                if(sortRating){
                    let resData = await Info.find().sort({rating: -1})
                    // console.log(resData)
                    res.status(200).send({ message: 'success', contents: resData }) 
                }else{
                    let resData = await Info.find()
                    // console.log(resData)
                    res.status(200).send({ message: 'success', contents: resData }) 
                }  
            }
    }
    } catch(err){
        res.status(403).send({ message: 'error', contents: err })
    }
    
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

}