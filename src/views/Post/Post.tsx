import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper } from './Post.styles';
import { useQuery } from 'graphql-hooks';
import Loading from 'components/molecules/Loading/Loading';
import { useError } from 'hooks/useError';

const Post = (): JSX.Element => {
  // Global States and Variables
  const { id: postId } = useParams<Partial<{ id: string }>>();
  const [post, setPost] = useState<{ title: string; description: string }>({
    title: 'Error 404',
    description: "This post isn't exist. We can't find this ID in our DataBase. If it's our mistake, please contact with our support!"
  });
  const { dispatchError } = useError();

  // GraphQL query for Post with required id
  const query = `{posts(where:{id:"${postId}"}){description, title}}`;
  const { data, loading, error } = useQuery(query);

  useEffect(() => {
    if (!loading && !error) {
      if (data.posts[0]?.title !== undefined) {
        setPost(data.posts[0]);
      } else {
        dispatchError("This post isn't exist.");
      }
    } else if (error) {
      dispatchError('Something went wrong with this post. Please, contact with support!');
    }
  }, [loading]);

  return <Wrapper>{loading ? <Loading /> : post.title}</Wrapper>;
};

export default Post;
