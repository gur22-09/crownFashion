import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  position:relative;
  width: 50px;
  height: 50px;
  &:after{
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid rgba(195, 195, 195, 0.6);;
    border-color: #636767 transparent #636767 transparent;
    animation: lds-hourglass 1.2s infinite;

    @keyframes lds-hourglass {
     0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
     50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
     100% {
        transform: rotate(1800deg);
      }
  }
 }
`;
