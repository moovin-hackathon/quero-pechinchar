import styled from 'styled-components';

export const CountContainer = styled.div`
  span {
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;

export const ProductContainer = styled.div`
  max-width: 1440px;
  padding: 120px 20px 0 20px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ProductImageContainer = styled.div`
  flex: 1;
  display: flex;
`;

export const MiniImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  img {
    margin: 0 10px 10px 10px;
  }
`;


export const FeaturedImageContainer = styled.div`
  flex: 1;
  width: 100%;
`;

export const FeaturedImage = styled.img`
  width: 100%;
`;

export const ProductDescriptionContainer = styled.div`
  flex: 1;
  margin-left: 20px;
  line-height: 25px;
`;

export const ProductName = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.span`
  font-size: 32px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`;

export const BuyButton = styled.button`
  margin-right: 10px;
  flex: 1;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  background: #fff;
  box-shadow: 0 1px 8px rgba(0,0,0,.3);
`;

export const ShareWithFacebook = styled.button`
  flex: 1;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  background: #fff;
  box-shadow: 0 1px 8px rgba(0,0,0,.3);
`;

export const DescriptionContainer = styled.div`
  margin-top: 20px;
`;

export const DescriptionTitle = styled.h3`
  font-size: 22px;
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;