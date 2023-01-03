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
    const metroFilter = req.query.metroFilter
    /****************************************/

    // NOTE Hint: 
    // use `db.collection.find({condition}).exec(err, data) {...}`
    // When success, 
    //   do `res.status(200).send({ message: 'success', contents: ... })`
    // When fail,
    //   do `res.status(403).send({ message: 'error', contents: ... })` 

    try{
        let resData = 0
        console.log(metroFilter)
        resData = await Info.find()
        console.log(resData)
        if(getPrice(priceFilter) != false && mealFilter == undefined && typeFilter == undefined){       //1,0,0
            console.log('1,0,0')
            resData = await Info.find({price: getPrice(priceFilter)}).sort({[sortBy]: 1})

        }else if(getPrice(priceFilter) == false && mealFilter != undefined && typeFilter == undefined){ //0,1,0
            console.log('0,1,0')
            resData = await Info.find({tag:{"$in":mealFilter}}).sort({[sortBy]: 1})

        }else if(getPrice(priceFilter) == false && mealFilter == undefined && typeFilter != undefined){ //0,0,1
            console.log('0,0,1')
            resData = await Info.find({tag:{"$in":typeFilter}}).sort({[sortBy]: 1})

        }else if(getPrice(priceFilter) != false && mealFilter != undefined && typeFilter == undefined){ //1,1,0
            console.log('1,1,0')
            resData = await Info.find({$and:[{price: getPrice(priceFilter)}, {tag:{"$in":mealFilter}}]}).sort({[sortBy]: 1})

        }else if(getPrice(priceFilter) != false && mealFilter == undefined && typeFilter != undefined){ //1,0,1
            console.log('1,0,1')
            resData = await Info.find({$and:[{price: getPrice(priceFilter)}, {tag:{"$in":typeFilter}}]}).sort({[sortBy]: 1})

        }else if(getPrice(priceFilter) == false && mealFilter != undefined && typeFilter != undefined){ //0,1,1
            console.log('0,1,1')
            resData = await Info.find({$and:[{tag:{"$in":typeFilter}}, {tag:{"$in":mealFilter}}]}).sort({[sortBy]: 1})

        }else if(getPrice(priceFilter) != false && mealFilter != undefined && typeFilter != undefined){ //1,1,1
            console.log('1,1,1')
            resData = await Info.find({$and:[{price: getPrice(priceFilter)}, {tag:{"$in":typeFilter}}, {tag:{"$in":mealFilter}}]}).sort({[sortBy]: 1})

        }else{                                                                                          //0,0,0
            console.log('0,0,0')
            resData = await Info.find().sort({[sortBy]: 1})
        }
        res.status(200).send({ message: 'success', contents: resData }) 

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
    console.log(id)
    try{
        const resData = await Info.find({id:id})
        res.status(200).send({ message: 'success', contents: resData }) 

    } catch(err){
        res.status(403).send({ message: 'error', contents: err })
    }

    // TODO Part III-2: find the information to the restaurant with the id that the user requests
}