import Image from 'next/image';
import { Container, HeaderContent } from "./styles";
import LogoCortex from "../../public/logo-cortex.svg";

export default function Header() {
  return(
    <Container>
      <HeaderContent>
        <Image
          src={LogoCortex}
          width={27}
          height={18}
        />
        <h1>Gerador de Assinatura de Email Cortex</h1>
      </HeaderContent>
    </Container>
  )
}