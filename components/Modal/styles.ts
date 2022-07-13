import styled from 'styled-components';

export const View = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0 0 0 / 50%);

  &.open {
   display: block;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  > div > small {
    font: 400 0.875em "Gotham";
    color: #642D96;
  }
  > div > h1 {
    font: bold 1.25em "Gotham";
    color: #642D96;
    margin-top: 10px;
  }
`
export const Container = styled.div`
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  max-width: 65%;
  margin: 0 auto;
  padding: 3em;
  background: #F5F5F5;
  border-radius: 24px;

  .swiper-button-next, .swiper-button-prev {
    color: #642D96;
  }
  .swiper-container {
    position: relative;
    > div {
      padding-top: 1.25em;
    }
  }
  .swiper-horizontal>.swiper-pagination-progressbar, .swiper-pagination-progressbar.swiper-pagination-horizontal {
    top: 0;
    > .swiper-pagination-progressbar-fill {
      background: #642D96;
    }
  }
`;


export const Message = styled.p`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: max-content;
  font: 400 1.5em "Gotham";
  color: #642D96;
  > a {
    text-decoration: underline;
  }
`