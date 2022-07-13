
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { 
  Container, 
  View,
  Header,
  Message
 } from './styles';

import Logo from "../../public/images/logo-purple.png"
import step1 from "../../public/images/step-1.png";
import step2 from "../../public/images/step-2.png";
import step3 from "../../public/images/step-3.png";
import step4 from "../../public/images/step-4.png";
import step5 from "../../public/images/step-5.png";
import step6 from "../../public/images/step-6.png";
import step7 from "../../public/images/step-7.png";
import step8 from "../../public/images/step-8.png";
import step9 from "../../public/images/step-9.png";
import step10 from "../../public/images/step-10.png";
import stepFinal from "../../public/images/step-final.png";

export function Modal({open, close}) {
  let isActive = false;

  if (open) {
    isActive = true;
  }

  return (
    <View className={isActive ? "open" : null} onClick={() => {
      // close modal when outside of modal is clicked
      close();
    }}>
      <Container onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}>
        <Header>
          <div>
            <small>Como instalar a sua assinatura de email</small>
            <h1>Gerador de Assinatura de Email Cortex</h1>
          </div>
          <Image src={Logo} alt="Logo Cortex" width={24} height={16}/>
        </Header>
        <section className='swiper-container'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={step1} alt="Imagem de demonstração, acesse o Gerador de Assinatura de Email Cortex" layout='responsive'/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={step2} alt="Imagem de demonstração, acesse o Gerador de Assinatura de Email Cortex" layout='responsive'/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={step3} alt="Imagem de demonstração, acesse o Gerador de Assinatura de Email Cortex" layout='responsive'/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={step4} alt="Imagem de demonstração, acesse o Gerador de Assinatura de Email Cortex" layout='responsive'/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={step5} alt="Imagem de demonstração, acesse o Gerador de Assinatura de Email Cortex" layout='responsive'/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={step6} alt="Imagem de demonstração, acesse o Gerador de Assinatura de Email Cortex" layout='responsive'/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={step7} alt="Imagem de demonstração, acesse o Gerador de Assinatura de Email Cortex" layout='responsive'/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={step8} alt="Imagem de demonstração, acesse o Gerador de Assinatura de Email Cortex" layout='responsive'/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={step9} alt="Imagem de demonstração, acesse o Gerador de Assinatura de Email Cortex" layout='responsive'/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={step10} alt="Imagem de demonstração, acesse o Gerador de Assinatura de Email Cortex" layout='responsive'/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={stepFinal} alt="Imagem de demonstração, acesse o Gerador de Assinatura de Email Cortex" layout='responsive'/>
              <Message>Para dúvidas e sugestões, fale com o <a href="https://cortex-intelligence.slack.com/archives/C0141PNKV8D" target="_blank" rel="noopener noreferrer">time de Branding.</a></Message>
            </SwiperSlide>
          </Swiper>
        </section>
      </Container>
    </View>
  );
}
