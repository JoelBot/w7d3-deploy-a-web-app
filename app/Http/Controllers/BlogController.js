'use strict'

const Post = use('App/Model/Post')

class BlogController {

  * index(request, response) {
    // look at the index router for adonis docs for what things do what.
    var posts = yield Post.query().select('*').orderBy('id', 'desc') // in posts select everything in reversed id order largest first.

    yield response.sendView('posts', {
      posts: posts
    })
  }

  * create(request, response) {
    yield response.sendView('create')
  }

  * store(request, response) {
    // response.json(request.all())
    var post = new Post()
    post.author = request.input('author')
    post.headline = request.input('headline')
    post.body = request.input('body')
    yield post.save() // this inserts the record and updates

    response.redirect('/blog')
  }

  * show(request, response) {
    var singlePost = yield Post.find(request.param('id'))  // this is finding the ID and routing to that post when a href link links to it

    yield response.sendView('post', {
      post: singlePost
    })
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = BlogController
