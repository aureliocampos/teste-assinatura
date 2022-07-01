import styled from 'styled-components'

export const Preview = styled.div`
  display: flex;
  align-items: center;
  width: 658px;
  height: 381px;
  padding-left: 40px;
  margin-top: 38px;
  box-shadow: 20px 20px 50px rgba(204, 204, 230, 0.27);
  border-radius: 16px;
`
export const Container = styled.table`
  width: 440px;
  height: auto;
  border-spacing: 0;
  border-color: transparent;
  word-break: break-word;
`
export const RowAlign = styled.tr`
  vertical-align: top;
  
  > td:first-of-type {
    padding-right: 40px;

    > img {
      margin-top: 6px;
    }
  }
`

export const FieldName = styled.h1`
  font: bold 21px / 29px "Arial";
  color:#642D96;
  margin: 0;
`

export const FieldOffice = styled.p`
  display: block;
  font: 400 16px / 22px "Arial";
  color: #37324B;
  text-decoration: none;
  margin: 4px 0 8px;
`

export const FieldPhone = styled.td`
  > a {
    display: block;
    font: 400 14px / 19px "Arial";
    color: #37324B;
    text-decoration: none;
    margin: 8px 0 0;
  }
`

export const FieldEmail = styled.td`
 > a {
  display: block;
  font: 400 14px / 19px "Arial";
  color: #37324B;
  text-decoration: none;
  margin: 8px 0 17px;
 }
`

export const Banner = styled.td`
  > img {
    margin-top: 20px;
  }
`

export const Icon = styled.div`
    display: inline-block;
  > img {
    margin-right: 4px;
  }
`