import styled from 'styled-components';

export const Task = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
`;
export const Content = styled.div`
  text-align: justify;
`;
export const StyledList = styled.ol`
  text-align: justify;
  
  li {
    line-height: 2;
  }
`;
export const Heading = styled.h1`
  color: #216298;
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0px;
`;

export const ModalWrapper = styled.div`
  position: relative;
  z-index: 10;
  border-radius: 10px;
  border: 1px solid red;
  min-width: 500px;
  background-color: #fff;
`;

export const ModalTitle = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid #C6C6C6;
  text-align: left;
`;

export const ModalTitleAlert = styled.img`
  margin-right: 5px;
`;

export const ModalContent = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
`;

export const ModalAction = styled.div`
  text-align: right;
  padding: 5px;
`;

export const ButtonConfirm = styled.button`
  padding: 15px;
  min-width: 120px;
  background-color: #E5F3FE;
  border-radius: 10px;
  border: none;
  margin-right: 10px;
  color: #2D6589;
`;

export const ButtonCancel = styled.button`
  padding: 15px;
  min-width: 120px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #2D6589;
  color: #2D6589;
`;

export const ListWithOverflow = styled.ul`
  height: 150px;
  overflow: scroll;
  list-style-type:none;
  border: 1px solid #AFAFAF;
  color: #2D6589;
  padding-inline-start: 15px;
`;
