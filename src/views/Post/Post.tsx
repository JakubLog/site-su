import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper, Title, Content, Footer, Image, ImageWrapper } from './Post.styles';
import { useQuery } from 'graphql-hooks';
import Loading from 'components/molecules/Loading/Loading';
import { useError } from 'hooks/useError';
import Share from 'components/molecules/Share/Share';

const Post: React.FC = () => {
  // Global States and Variables
  const { id: postId } = useParams<Partial<{ id: string }>>();
  const [post, setPost] = useState<{ title: string; description: string; createdBy: { name: string }; src: { url: string } }>({
    title: 'Error 404',
    description: "This post isn't exist. We can't find this ID in our DataBase. If it's our mistake, please contact with our support!",
    createdBy: { name: 'Administracja serwisu' },
    src: { url: 'https://www.wwf.pl/sites/default/files/inline-images/25311985_l.jpg' }
  });
  const { dispatchError } = useError();

  // GraphQL query for Post with required id
  const query = `{posts(where:{id:"${postId}"}){description,title,createdBy{name},src{url}}}`;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ImageWrapper>
            <Image src={post.src.url} alt={post.title} />
          </ImageWrapper>
          <Title>{post.title}</Title>
          <Content>{post.description}</Content>
          <Footer>
            <Share id={postId} />
            <span>{`Samorząd Uczniowski - ${post.createdBy.name}`}</span>
          </Footer>
        </>
      )}
    </Wrapper>
  );
};

export default Post;
