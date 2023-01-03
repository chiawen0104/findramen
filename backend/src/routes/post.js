import Post from '../models/post'

exports.GetPostsByRestaurantId = async (req, res) => {
    /*******    NOTE: DO NOT MODIFY   *******/
    const id = req.query.restaurantId
    /****************************************/

    try{
        let post = 0;
        
        post = await Post.find({restaurantId: id});
        res.status(200).send({ message: 'success', contents: post })
    } catch(err) {
        res.status(403).send({ message: 'error', contents: [] })
    }
}