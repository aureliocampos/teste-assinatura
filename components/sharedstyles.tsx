import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`
export const Main = styled.main`
  width: 1130px;
  height: 100%;
`
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5.5em;
  margin-top: 4em;
`
export const Column = styled.div`
  &:first-child {
    width: 400px;

    > form div {
      width: 369px;
      margin: 1.5em 0;

      > label {
        display: block;
        font: 400 1em / 125.18% "Gotham";
        color: #37324B;
        margin: 0 1.5em 1em 0;
      }
      > input {
        display: block;
        width: 360px;
        font: 400 12px / 16px "Gotham";
        color: #7A7589;
        padding: 12px 24px 14px;
        background: #F1F1FA;
        border: 1px solid transparent;
        border-radius: 40px;
        
        &:focus-visible {
          outline: none;
          border: 1px solid rgba(55, 50, 75, 0.5);
        }
      }
    }
  }
  &:last-child {
    width: 658px;
  }

  > h2 {
    font: 500 1.125em / 120% 'Gotham';
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
  }
`
export const Button = styled.button`
  display: block;
  font: 400 1em "Gotham";
  color: #fff;
  padding: 12px 24px 14px;
  background: #37324B;
  border: 1px solid #37324B;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 60px;
`;

export const MessageSuccess = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  > div {
    position: absolute;
    left: -20em;
    bottom: 20px;
    background-color: #00B9B4;
    padding: 12px 24px;
    border-radius: 4px;
    visibility: hidden;
    font: 500 16px / 120% "Gotham";
    color: #F1F1FA;
    transition: all 0.4s ease-in-out;

    &.active {
      visibility: visible;
      left: 0;
    }
  }
  
`