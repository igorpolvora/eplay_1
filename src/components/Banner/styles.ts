import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
  margin: 0;
  line-height: 1.2;
`

export const Precos = styled.p`
  font-size: 24px;
  margin: 0;
  margin-top: 16px;

  span {
    text-decoration: line-through;
  }
`
export const ButtonContainer = styled.div`
  margin-top: 24px;
  width: 100%;
  max-width: 200px;
`
