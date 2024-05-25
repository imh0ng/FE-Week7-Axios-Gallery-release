import React, { useState, useEffect } from 'react';
import { getImages, getImageCount } from '../api';
import ImageGrid from '../components/ImageGrid';
import styled from 'styled-components';


const HeaderWrap = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 0 15px;
`;

const HeaderInner = styled.div`
  display: flex;
  max-width: 600px;
  margin: auto;
  gap: 15px;
`;

const LogoImg = styled.img`
  width: 150px;
  @media all and (max-width:480px) {
    width: 80px;
    height: 80px;
  }
`

const LogoRight = styled.div`
  align-content: center;
  h2 {
    margin: unset;
  }
  p {
    margin: unset;
  }

  @media all and (max-width:480px) {
    p {
      font-size: 13px;
      word-break: keep-all;
    }
  }
`

const TotalCount = styled.p`
  font-weight: 600;
  margin-top: 15px !important;
`

function Home() {
  const [images, setImages] = useState([]);
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    getImages()
      .then(response => setImages(response.data))
      .catch(error => console.error('Error fetching images:', error));
      
    getImageCount()
      .then(response => setImageCount(response.data))
      .catch(error => console.error('Error fetching image count:', error));
  }, []);

  return (
    <div>
      <HeaderWrap>
          <HeaderInner>
              <LogoImg src="/logo.png"/>
              <LogoRight>
                  <h2>likelion_12th_frontend</h2>
                  <p>멋쟁이사자처럼 12기 여러분 화이팅!! 어른사자로 폭풍성장중..😁</p>
                  <TotalCount>게시물 {imageCount}개</TotalCount>
              </LogoRight>
          </HeaderInner>
      </HeaderWrap>
      <ImageGrid images={images} />
    </div>
  );
}

export default Home;
