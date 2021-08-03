import React, { useEffect, useState } from 'react';
import Hero from 'components/molecules/Hero/Hero';
import Section from 'components/molecules/Section/Section';
import Gallery from 'components/organisms/Gallery/Gallery';
import styled from 'styled-components';
import Forms from 'components/organisms/Forms/Forms';
import { useQuery } from 'graphql-hooks';
import { useError } from 'hooks/useError';

export const FormsWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Main = (): JSX.Element => {
  const POSTS_QUERY = `{
    posts {
      id
      title
      description
      src {
        url
      }
    }
  }`;

  const FORMS_QUERY = `{
    forms {
      title
      link
    }
  }`;

  const [posts, setPosts] = useState([]);
  const [forms, setForms] = useState([]);
  const { loading: postsLoading, error: postsError, data: postsData } = useQuery(POSTS_QUERY);
  const { loading: formsLoading, error: formsError, data: formsData } = useQuery(FORMS_QUERY);
  const { dispatchError } = useError();

  useEffect(() => {
    if (!postsLoading && !postsError) {
      const { posts } = postsData;
      const reversedPostsArray = posts.reverse();
      const filteredPosts = reversedPostsArray.slice(0, 5);
      setPosts(filteredPosts);
    } else if (postsError) {
      dispatchError('Something went wrong with the posts. Contact with support!');
    }
  }, [postsLoading]);

  useEffect(() => {
    if (!formsLoading && !formsError) {
      const { forms } = formsData;
      const reversedFormsArray = forms.reverse();
      const filteredForms = reversedFormsArray.slice(0, 5);
      setForms(filteredForms);
    } else if (formsError) {
      dispatchError('Something went wrong with the forms. Contact with support!');
    }
  }, [formsLoading]);

  return (
    <>
      <Hero />
      <Section label="news" title="Z życia szkoły">
        <Gallery array={posts} />
      </Section>
      <Section label="forms" title="Aktywne ankiety">
        <Forms array={forms} />
      </Section>
    </>
  );
};

export default Main;
