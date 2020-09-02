import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #5994FF;
    padding: 8px;
    border-radius: 4px;
    font-size: 12px !important;
    font-weight: 1000 !important;
    opacity: 0;
    transition: opacity 0.4s !important;
    visibility: hidden;

    height: auto !important;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);

    text-align: center;
    justify-content: center;
    align-items: center !important;

    color: #FFF !important;

    &::before {
      content: '';
      border-style: solid;
      border-color: #5994FF transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
