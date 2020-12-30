import express from 'express';
import { MesssageProvider, Messages } from '@utils';

import PostsContoller from '../controller';

const { Router } = express;

const PostsRouter = Router();

PostsRouter.get('/all', async (request, response) => {
  try {
    const posts = await PostsContoller.getAllPosts();
    response.status(200).send(posts);
  } catch (e) {
    response.status(500).send({
      success: false,
      message: MesssageProvider.messageByKey(Messages.KEYS.ERROR_FETCHING_DATA),
    });
  }
});

PostsRouter.post('/post', async (request, response) => {
  const newPost = request.body;
  try {
    const post = await PostsContoller.createPost(newPost);
    response.status(200).send({ id: post.id });
  } catch (e) {
    console.log(e);
    if (e.name === 'SequelizeValidationError') {
      response.status(400).send({
        success: false,
        message: MesssageProvider.messageByKey(Messages.KEYS.VALIDATION_ERROR),
        errors: e.errors,
      });
    } else {
      response.status(500).send({
        success: false,
        message: MesssageProvider.messageByKey(
          Messages.KEYS.ERROR_FETCHING_DATA
        ),
      });
    }
  }
});

PostsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  try {
    const post = await PostsContoller.getPostById(id);
    response.status(200).send(post);
  } catch (e) {
    response.status(500).send({
      success: false,
      message: MesssageProvider.messageByKey(Messages.KEYS.ERROR_FETCHING_DATA),
    });
  }
});

PostsRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { body } = request;
  try {
    const post = await PostsContoller.updatePost(id, body);
    response.status(200).send(post);
  } catch (e) {
    response.status(500).send({
      success: false,
      message: MesssageProvider.messageByKey(Messages.KEYS.ERROR_FETCHING_DATA),
    });
  }
});

PostsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  try {
    await PostsContoller.deleteById(id);
    response.status(200).send({
      success: true,
      message: MesssageProvider.messageByKey(
        Messages.KEYS.DELETED_DATA_SUCCESS
      ),
    });
  } catch (e) {
    response.status(500).send({
      success: false,
      message: MesssageProvider.messageByKey(Messages.KEYS.ERROR_FETCHING_DATA),
    });
  }
});

export default PostsRouter;
