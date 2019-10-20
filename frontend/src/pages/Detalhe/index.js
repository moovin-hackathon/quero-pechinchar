import React, { Component } from 'react';
import Firebase from '../../Firebase';

import { 
  Container, 
  MiniImagesContainer, 
  FeaturedImage,
  ProductDescriptionContainer,
  ProductName,
  ProductPrice,
  BuyButton,
  ShareWithFacebook,
  DescriptionContainer,
  ProductImageContainer,
  ButtonContainer,
  DescriptionTitle,
  DescriptionText,
  FeaturedImageContainer
} from './styles';

import photo1 from '../../images/product/foto1.png';
import photo2 from '../../images/product/foto2.png';
import photo3 from '../../images/product/foto3.png';
import photo4 from '../../images/product/foto4.png';

export default class Detalhe extends Component {
  state = {};

  componentDidMount() {
    let ref = Firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
      console.log(state);
    });
  }

  render() {
    return (
      <Container>
        <ProductImageContainer>
          <MiniImagesContainer>
            <img src={photo4} />
            <img src={photo2} />
            <img src={photo3} />
          </MiniImagesContainer>
          <FeaturedImageContainer>
            <FeaturedImage src={photo1} />
          </FeaturedImageContainer>
        </ProductImageContainer>
        <ProductDescriptionContainer>
          <ProductName>Polo grey</ProductName>
          <ProductPrice>R$ 45,00</ProductPrice>
          <ButtonContainer>
            <BuyButton>Comprar</BuyButton>
            <ShareWithFacebook>Compartilhar</ShareWithFacebook>
          </ButtonContainer>
          <DescriptionContainer>
            <DescriptionTitle>Descrição</DescriptionTitle>
            <DescriptionText>uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp</DescriptionText>
          </DescriptionContainer>
        </ProductDescriptionContainer>
      </Container>
    )
  }
}
