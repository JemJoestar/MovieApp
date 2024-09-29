const { default: styled } = require('@emotion/styled');

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 8px;
  z-index: 10;
  overflow: hidden;
  background-color: #343434;
  color: #fff;
  .logo{
    color: #fff;
    font-size: 24px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
  }
`;
