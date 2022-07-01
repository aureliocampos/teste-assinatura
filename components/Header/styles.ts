import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2.75em 0 1.5em;
  background-color: #F6F6FB;
`
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  width: 1130px;

  > h1 {
    font: 500 1.125em / 120% 'Gotham';
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
  }
`