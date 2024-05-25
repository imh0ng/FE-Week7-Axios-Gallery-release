import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 800px;
  margin: auto;
  padding: 15px;

  @media all and (max-width:480px) {
    display: block;
  }
`;

const ImageCard = styled.div`
  text-align: center;
  overflow: hidden;
  h2 {
    margin: unset;
    font-size: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    text-align: left;
    color: black;
  }

  p {
    margin: unset;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    text-align: left;
    color: grey;
  }

  a {
    text-decoration: none;
  }

  @media all and (max-width:480px) {
    h2 {
      margin: 10px 0;
    }
    p {
      margin: 0 0 10px 0;
    }
  }
`;

function ImageGrid({ images }) {
  return (
    <Grid>
      {images.map(image => (
        <ImageCard key={image.id}>
          <Link to={`/image/${image.id}`} state={{ image }}>
            <img src={image.imageURL} alt={image.imageName} width="100%" />
            <h2>{image.imageName}</h2>
            <p>{image.imageText}</p>
          </Link>
        </ImageCard>
      ))}
    </Grid>
  );
}

export default ImageGrid;
