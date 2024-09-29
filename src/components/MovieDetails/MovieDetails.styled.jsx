import styled from '@emotion/styled';

export const StyledMovieDetails = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 5;
  
  .details-body {
    position: relative;
    display: flex;
    gap: 20px;
    z-index: 6;
    background-color: #7b7b7bb6;
    width: auto;
    padding: 16px;
    height: fit-content;
    border-radius: 10px;
    .poster {
      border-radius: 10px;
      width: 300px;
    }
    .right-side {
      .title {
        font-size: 32px;
        font-weight: 700;
        color: #ffffff;
      }
    }
  }
  @media only screen and (max-width: 720px) {
    .details-body {
      flex-direction: column;
      width: 300px;
    }
  }

  img.backdrop {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: blur(8px);
  }
`;
