import infoRoute from './info'
import commentRoute from './comment'
import postRoute from './post'

const wrap = fn => (...args) => fn(...args).catch(args[2])

function main(app) {
  app.get('/api/getSearch', wrap(infoRoute.GetSearch))
  app.get('/api/getInfo', wrap(infoRoute.GetInfo))
  app.get('/api/getCommentsByRestaurantId', wrap(commentRoute.GetCommentsByRestaurantId))
  app.get('/api/getPostsByRestaurantId', wrap(postRoute.GetPostsByRestaurantId));
}

export default main
