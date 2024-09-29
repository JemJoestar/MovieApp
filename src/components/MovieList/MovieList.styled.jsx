import styled from '@emotion/styled';

export const StyledMovieList = styled.div`
  .list-body {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: stretch;
    justify-content: center;
    .movie-card {
      text-decoration: none;
      position: relative;
      width: 350px;
      padding: 12px;
      border-radius: 16px;
      border: solid 1px #818181;
      background-color: #8c8c8c;
      transform: scale(100%);
      transition: all ease-in 100ms;
      &:hover {
        transform: scale(102%);
        transition: all ease-in 100ms;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.63),
          inset 0px 4px 8px 0px rgba(199, 199, 199, 0.58);
          
      }
      img {
        display: block;
        border-radius: 16px;
        width: inherit;
      }
      p.movie-card-title {
        font-size: 24px;
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
`;
