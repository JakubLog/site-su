import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 25px;
  justify-items: center;
  @media (min-width: 1350px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px;
  }
`;
