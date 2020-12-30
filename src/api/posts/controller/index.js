import { v4 as uuidv4 } from 'uuid';

const Models = require('@data/models');

const { Posts } = Models;

const createPost = async (post) => {
  const id = uuidv4();
  const newPost = await Posts.create({ id, ...post });
  return newPost;
};

const getPostById = async (id) => {
  const post = await Posts.findOne({
    where: { id },
  });
  return post;
};

const getAllPosts = async () => {
  const posts = await Posts.findAll();
  return posts;
};

const updatePost = async (id, body) => {
  await Posts.update(body, {
    where: { id },
  });

  const updatedPost = await Posts.findOne({ where: { id } });
  return updatedPost;
};

const deleteById = async (id) => {
  const deletedPost = await Posts.destroy({
    where: { id },
  });
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
