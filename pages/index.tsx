import Head from 'next/head'
import {
  Container,
  FlexContainer,
  Main,
  Column,
  Button,
  MessageSuccess,
} from '../components/sharedstyles'

import SignatureEmail from '../components/SignatureEmail';
import Header from "../components/Header";
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

type FormInputs = {
  name: string,
  office: string,
  mobileNumber: string,
}

export default function Home() {

  const { register, watch } = useForm<FormInputs>();
  const watchAllFields = watch();   


  function messageSuccessful() {
    document.querySelector('.message').classList.add('active');
    
    setTimeout(() => {
      document.querySelector('.message').classList.remove('active');
    }, 1500);
  }

  return (
    <Container>
      <Head>
        <title>Gerador de Assinatura de Email Cortex</title>
        <meta name="description" content="Gerador de Assinatura de Email Cortex" />
        <link rel="icon" href="/logo-cortex.svg" />
      </Head>
      <Header />
      <Main>
        <FlexContainer>
          <Column>
            <h2>Preencha seus dados</h2>
            <form>
              <div>
                <label htmlFor="name">Nome e Sobrenome</label>
                <input type="text" name='name' placeholder="Nome e Sobrenome" 
                  {...register("name", {required: true, maxLength: 80})} 
                />
              </div>
              <div>
                <label htmlFor="name">Seu Cargo</label>
                <input type="text" name="office" placeholder="Cargo" 
                  {...register("office", {required: true})} 
                />
              </div>
              <div>
                <label htmlFor="mobileNumber">Seu telefone</label>
                <input type="tel" name="mobileNumber"placeholder="+55 (99) 99999-9999" 
                  {...register("mobileNumber", 
                  {
                    required: true, 
                    max: 15, 
                    maxLength: 12, 
                    pattern: /99 99999-9999/i
                  })} 
                  />
              </div>
            </form>
            <Button onClick={() => {
              let range = document.createRange();
              let referenceNode = document.getElementsByTagName('table').item(0);
            
              range.selectNode(referenceNode);
              window.getSelection().removeAllRanges();
              window.getSelection().addRange(range);
              
                try {
                  document.execCommand('copy');  
                  messageSuccessful();
              
                } catch(err) {  
                  console.log(err);  
                }  

              window.getSelection().removeAllRanges();
                           
            }}>Copiar Assinatura</Button>
          </Column>
          <Column>
            <h2>Veja como ficará sua asssinatura de email</h2>
            <SignatureEmail 
                name={ 
                  watchAllFields.name ? (
                    watchAllFields.name
                  ) : ("Nome e Sobrenome")
                }
                jobTitle={
                  watchAllFields.office ? (
                    watchAllFields.office
                  ) : ("Cargo")
                }
                phone={
                  watchAllFields.mobileNumber ? (
                    watchAllFields.mobileNumber
                  ): ("+55 (99) 99999-9999")
                }
              /> 
          </Column>
        </FlexContainer>
      </Main>
      <MessageSuccess>
        <div className='message'>
          Copiada com sucesso!
        </div>
      </MessageSuccess>
    </Container>
  )
}

