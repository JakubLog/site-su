import React, { useEffect, useState } from 'react';
import Hero from 'components/molecules/Hero/Hero';
import Section from 'components/molecules/Section/Section';
import Gallery from 'components/organisms/Gallery/Gallery';
import Forms from 'components/organisms/Forms/Forms';
import { useQuery } from 'graphql-hooks';
import { useError } from 'hooks/useError';
import Loading from 'components/molecules/Loading/Loading';
import About from 'components/molecules/About/About';
import CovidBlock from 'components/molecules/CovidBlock/CovidBlock';

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

const Main = (): JSX.Element => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formsLoading]);

  return (
    <>
      <Hero />
      <Section label="news" title="Z życia szkoły">
        {postsLoading ? <Loading /> : <Gallery array={posts} />}
      </Section>
      <Section label="forms" title="Aktywne ankiety">
        {formsLoading ? <Loading /> : <Forms array={forms} />}
      </Section>
      <Section label="about" title="O nas">
        <About />
      </Section>
      <Section label="covid" title="Raport Covid'owy">
        <CovidBlock />
      </Section>
    </>
  );
};

export default Main;
