import { v4 as uuidv4 } from 'uuid';
import { PostsModel as Posts } from '@data/models';

const createPost = async (post) => {
  const id = uuidv4();
  const newPost = await Posts.query().insert({ id, ...post });
  return newPost;
};

const getPostById = async (id) => {
  const post = await Posts.query().findById(id);
  return post;
};

const getAllPosts = async () => {
  const posts = await Posts.query();
  return posts;
};

const updatePost = async (id, body) => {
  const updatedPost = await Posts.query().patchAndFetchById(id, body);
  return updatedPost;
};

const deleteById = async (id) => {
  const deletedPost = await Posts.query().deleteById(id);
  return deletedPost;
};

const PostsContoller = {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deleteById,
};

export default PostsContoller;
