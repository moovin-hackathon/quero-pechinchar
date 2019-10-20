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
  ButtonShare,
  ProductDescount,
  MessageType
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
    buttonOpen: true,
    progressDisabled: false,
    ModalOpen: false,
    messageType: '',
    valorCalc: null,
    timer: 0,
    product: {
      descricao: '',
      nome: '',
      preco: null,
      tempoduracao: null,
      valordescontomaximo: null,
      meta: null,
      compartilhados: 0,
      desconto: null,
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

  componentDidMount() {
    let ref = Firebase.database().ref('/Produto');
    ref.on('value', snapshot => {
      const Produto = snapshot.val();
      const { descricao, nome, preco, tempoduracao, valordescontomaximo, meta, compartilhados } = Produto[0];

      this.setState({
        timer: (Date.now() + tempoduracao), 
        product: {
          descricao,
          nome,
          preco,
          tempoduracao,
          valordescontomaximo,
          meta,
          compartilhados,
        },
      })
    });
  }

  changeShares = (message, preco, valordescontomaximo, meta, compartilhados, progress) => {
    const shares = compartilhados + 1;
    const { product } = this.state;

    this.setState({
      buttonOpen: false,
      product: {
        compartilhados: shares,
      }
    });

    Firebase.database().ref('/Produto/0').set({
      ...product,
      compartilhados: shares,
    });

    this.setPriceProduct(message, preco, valordescontomaximo, meta, compartilhados, progress);
    this.handleModalClose();
  }

  setPriceProduct = (message, preco, valordescontomaximo, meta, compartilhados, progress) => {
    const { progressDisabled } = this.state;

    const valorCalc = preco - (valordescontomaximo / meta * compartilhados);

    if (valorCalc >= 0 ) {
      this.setState({ valorCalc });
    }

    let typeMessage;
    if (message === 'metaDone') {
      typeMessage = 'Desconto máximo atingido, garanta já seu produto com desconto!'
    } else if (message === 'timeout') {
      typeMessage = 'O tempo para compartilhar acabou, adquira seu produto com desconto!'
    }

    if (!progressDisabled && !progress) {
      this.setState({
        buttonOpen: false,
        progressDisabled: true, 
        messageType: typeMessage,
      });
    }
  }


  render() {
    const { product, ModalOpen, progressDisabled, messageType, valorCalc, buttonOpen } = this.state;
    const { nome, tempoduracao, preco, valordescontomaximo, meta, compartilhados } = product;
    
    if (compartilhados && meta && compartilhados >= meta) {
      this.setPriceProduct('metaDone', preco, valordescontomaximo, meta, compartilhados);
    }
    
    if (tempoduracao) {
      setTimeout(() => {
        this.setPriceProduct('timeout', preco, valordescontomaximo, meta, compartilhados);
      }, tempoduracao);
    }

    console.log(Date.now() + product.tempoduracao);
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
              <ProductName>{nome ? nome : <Loading width="160px" />}</ProductName>
              <ProductPrice>{valorCalc ? formatPrice(valorCalc) : preco ? formatPrice(preco) : <Loading width="130px" />}</ProductPrice>
              <ButtonContainer>
                <BuyButton>Comprar</BuyButton>
                {buttonOpen && <ShareWithFacebook onClick={this.handleModalOpen}>{'Pechinchar'}</ShareWithFacebook>}
              </ButtonContainer>
              {progressDisabled ? (
                <MessageType>{messageType}</MessageType>
              ) : (
                <>
                  <ProgressBar variant="determinate" value={((100 * compartilhados) / meta)}/>
                  {tempoduracao ? (<CountContainer><Countdown date={Date.now() + product.tempoduracao} /></CountContainer>) : <Loading width="160px" />}
                </>
              )}
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
                    <ButtonShare onClick={() => this.changeShares(null, preco, valordescontomaximo, meta, compartilhados, true)}>
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
