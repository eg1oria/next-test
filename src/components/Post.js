"use client";


import Link from 'next/link';
import React from 'react';
import ProgressButton from './ProgressButton';

const Post = ({ post }) => {
  return (
    <div>
      <Link href="/posts">Назад</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>ID: {post.id}</p>
      <ProgressButton />
    </div>
  );
};

export default Post;
