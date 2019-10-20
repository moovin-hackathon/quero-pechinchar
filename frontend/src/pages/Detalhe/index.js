import React, { Component } from 'react';
import Firebase from '../../Firebase';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Countdown from 'react-countdown-now';

import ProgressBar from '../../components/ProgressBar';

import {
  Container,
  ProductContainer, 
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
  FeaturedImageContainer,
  CountContainer,
  ContainerModal,
  DescriptionCont,
  TextShare,
  ShareTime,
  ButtonShare
} from './styles';

import Loading from '../../components/Loading';
import Modal from '@material-ui/core/Modal';

import photo1 from '../../images/product/foto1.png';
import photo2 from '../../images/product/foto2.png';
import photo3 from '../../images/product/foto3.png';
import photo4 from '../../images/product/foto4.png';

import { formatPrice } from '../../utils/format';

export default class Detalhe extends Component {
  state = {
    ModalOpen: false,
    compartilhado: false,
    modalOpen: false,
    product: {
      descricao: '',
      nome: '',
      preco: null,
    },
    progress : 0
  };

  handleModalOpen = () => {
    this.setState({
      ModalOpen: true,
    })
  }

  handleModalClose = () => {
    this.setState({
      ModalOpen: false,
    });
    
  }

  handleBuyModal = () => {
   return alert('oi');
  }

  componentDidMount() {
    let ref = Firebase.database().ref('/Produto');
    ref.on('value', snapshot => {
      const Produto = snapshot.val();
      const { descricao, nome, preco, porcentagem, tempoduracao } = Produto[0];
      this.setState({
        product: {
          descricao,
          nome,
          preco: formatPrice(preco),
          porcentagem,
          tempoduracao
        },
      })
    });
  }

  render() {
    const { product, ModalOpen, compartilhado } = this.state;
    
    return (
      <Container>
        <Header />
          <ProductContainer>
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
              <ProductName>{product.nome ? product.nome : <Loading width="160px" />}</ProductName>
              <ProductPrice>{product.preco ? product.preco : <Loading width="130px" />}</ProductPrice>
              <ButtonContainer>
                <BuyButton>Comprar</BuyButton>
                <ShareWithFacebook onClick={compartilhado ? this.handleBuyModal : this.handleModalOpen}>{compartilhado ? 'Comprar' : 'Pechinchar'}</ShareWithFacebook>
              </ButtonContainer>
              {product.porcentagem ? <ProgressBar variant="determinate" value={product.porcentagem}/> : <Loading width="160px" />}
              {product.tempoduracao ? (<CountContainer><Countdown date={Date.now() + product.tempoduracao} /></CountContainer>) : <Loading width="160px" />}
              <DescriptionContainer>
                <DescriptionTitle>Descrição</DescriptionTitle>
                <DescriptionText>{product.descricao ? product.descricao : <Loading width="220px" />}</DescriptionText>
              </DescriptionContainer>
            </ProductDescriptionContainer>
          </ProductContainer>
          <Footer />
          {ModalOpen && (
            <Modal open={ModalOpen} onClose={this.handleModalClose}>
              <ContainerModal>
                <DescriptionCont>
                  <TextShare>divulgue o produto nas suas redes sociais e ganhe desconto na sua compra quanto mais acessos pelo seu link maior o seu desconto.</TextShare>
                  <ShareTime>O tempo máximo para pechinchar o desconto será de (tempo) horas.</ShareTime>
                </DescriptionCont>
                <>
                  <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large">
                    <ButtonShare onClick={() => this.setState({ compartilhado: true })}>
                      <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Compartilhar</a>
                    </ButtonShare>
                  </div>
                </>
              </ContainerModal>
            </Modal>
          )}
      </Container>
    )
  }
}
