import Comment from '../models/comment'

exports.GetCommentsByRestaurantId = async (req, res) => {
    const id = req.query.restaurantId
    
    try{
        let comments = 0;
        
        comments = await Comment.find({restaurantId: id});
        res.status(200).send({ message: 'success', contents: comments })
    } catch(err) {
        res.status(403).send({ message: 'error', contents: [] })
    }
}
