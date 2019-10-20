import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  background: #fff;
  box-shadow: 0 1px 8px rgba(0,0,0,.3);
  display: flex;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  height: 100%;
`;

export const ListItem = styled.li`
  margin-right: 10px;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  color: #C3BC32;
  cursor: pointer;
`;

export const Logo = styled.img`
  display: block;
  margin-right: 135px;
`;

export const ButtonCart = styled.button`
  position: relative;
  padding-right: 10px;
`;

export const CartItem = styled.span`
  position: absolute;
    top: 0;
    right: -2px;
  width: 22px;
  height: 22px;
  background: #C3BC32;
  border-radius: 50%;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;