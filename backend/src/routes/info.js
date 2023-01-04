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
    const nameFilter = req.query.nameFilter
    /****************************************/
    // console.log(req.query)

    try{
        if (typeof(lineFilter) !== 'undefined'){
            const lineStr = lineFilter.map(e => e.slice(0,-9))

            // filters
            if (typeof(filters) !== 'undefined' && typeof(mrtFilter) === 'undefined' && typeof(nameFilter) === 'undefined'){
                let filterData = await Info.find({ tag: { $in:  filters }, line: { $in: lineStr } })
                res.status(200).send({ message: 'success', contents: filterData })
            }
            // filters + nameFilter
            else if(typeof(filters) !== 'undefined' && typeof(mrtFilter) === 'undefined' && typeof(nameFilter) !== 'undefined'){
            let filterData = await Info.find({ tag: { $in:  filters }, name: { $regex: ".*" + nameFilter + ".*"}, line: { $in: lineStr } })
                res.status(200).send({ message: 'success', contents: filterData })
            }
            // filters + mrtFilter 
            else if(typeof(filters) !== 'undefined' && typeof(mrtFilter) !== 'undefined' && typeof(nameFilter) === 'undefined'){
                let filterData = await Info.find({ tag: { $in:  filters }, mrt: { $in:  mrtFilter }, line: { $in: lineStr } })
                res.status(200).send({ message: 'success', contents: filterData })
            }
            // filters + nameFilter + mrtFilter
            else if(typeof(filters) !== 'undefined' && typeof(mrtFilter) !== 'undefined' && typeof(nameFilter) !== 'undefined'){
            let filterData = await Info.find({ tag: { $in:  filters }, mrt: { $in:  mrtFilter }, name: { $regex: ".*" + nameFilter + ".*"}, line: { $in: lineStr } })
                res.status(200).send({ message: 'success', contents: filterData })
            }
            // mrtFilter
            else if(typeof(filters) === 'undefined' && typeof(mrtFilter) !== 'undefined' && typeof(nameFilter) === 'undefined'){
                let filterData = await Info.find({ mrt: { $in:  mrtFilter }, line: { $in: lineStr } })
                res.status(200).send({ message: 'success', contents: filterData })
            }
            // nameFilter 
            else if(typeof(filters) === 'undefined' && typeof(mrtFilter) === 'undefined' && typeof(nameFilter) !== 'undefined'){
                let filterData = await Info.find({ name: { $regex: ".*" + nameFilter + ".*"}, line: { $in: lineStr } })
                res.status(200).send({ message: 'success', contents: filterData })
            }
            // nameFilter + mrtFilter
            else if(typeof(filters) === 'undefined' && typeof(mrtFilter) !== 'undefined' && typeof(nameFilter) !== 'undefined'){
                let filterData = await Info.find({ name: { $regex: ".*" + nameFilter + ".*"}, mrt: { $in:  mrtFilter }, line: { $in: lineStr } })
                res.status(200).send({ message: 'success', contents: filterData })
            }
            // only lineFilter
            else { 
                let resData = await Info.find({ line: { $in:  lineStr } })
                res.status(200).send({ message: 'success', contents: resData }) 
            }
        }
        else {
            // filters
            if (typeof(filters) !== 'undefined' && typeof(mrtFilter) === 'undefined' && typeof(nameFilter) === 'undefined'){
                let filterData = await Info.find({ tag: { $in:  filters } })
                res.status(200).send({ message: 'success', contents: filterData })
            }
            // filters + nameFilter
            else if(typeof(filters) !== 'undefined' && typeof(mrtFilter) === 'undefined' && typeof(nameFilter) !== 'undefined'){
                let filterData = await Info.find({ tag: { $in:  filters }, name: { $regex: ".*" + nameFilter + ".*"} })
                res.status(200).send({ message: 'success', contents: filterData })
            }
            // filters + mrtFilter 
            else if(typeof(filters) !== 'undefined' && typeof(mrtFilter) !== 'undefined' && typeof(nameFilter) === 'undefined'){
                let filterData = await Info.find({ tag: { $in:  filters }, mrt: { $regex: ".*" + nameFilter + ".*" } })
                res.status(200).send({ message: 'success', contents: filterData })
            }
            // filters + nameFilter + mrtFilter
            else if(typeof(filters) !== 'undefined' && typeof(mrtFilter) !== 'undefined' && typeof(nameFilter) !== 'undefined'){
                let filterData = await Info.find({ tag: { $in:  filters }, mrt: { $in:  mrtFilter }, name: { $regex: ".*" + nameFilter + ".*"} })
                res.status(200).send({ message: 'success', contents: filterData })
            }
            // mrtFilter
            else if(typeof(filters) === 'undefined' && typeof(mrtFilter) !== 'undefined' && typeof(nameFilter) === 'undefined'){
                let filterData = await Info.find({ mrt: { $in:  mrtFilter } })
                res.status(200).send({ message: 'success', contents: filterData })
            }
            // nameFilter 
            else if(typeof(filters) === 'undefined' && typeof(mrtFilter) === 'undefined' && typeof(nameFilter) !== 'undefined'){
                let filterData = await Info.find({ name: { $regex: ".*" + nameFilter + ".*"} })
                res.status(200).send({ message: 'success', contents: filterData })
            }
            // nameFilter + mrtFilter
            else if(typeof(filters) === 'undefined' && typeof(mrtFilter) !== 'undefined' && typeof(nameFilter) !== 'undefined'){
                let filterData = await Info.find({ name: { $regex: ".*" + nameFilter + ".*"}, mrt: { $in:  mrtFilter } })
                res.status(200).send({ message: 'success', contents: filterData })
            }
            // NO filter
            else { 
                let resData = await Info.find()
                res.status(200).send({ message: 'success', contents: resData }) 
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
    
    try{
        const resData = await Info.find({id:id})
        res.status(200).send({ message: 'success', contents: resData }) 
    } catch(err){
        res.status(403).send({ message: 'error', contents: err })
    }

}