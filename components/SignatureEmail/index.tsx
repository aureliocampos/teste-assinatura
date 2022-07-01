
import { 
  Preview, 
  Container,
  RowAlign,
  FieldName,
  FieldOffice,
  FieldEmail,
  FieldPhone,
  Icon,
  Banner } from "./styles";

type User = {
  name: string,
  jobTitle: string,
  phone: string
}

export default function SignatureEmail(user: User) {

  const { name, jobTitle, phone } = user;

  return (
    <Preview>
      <Container>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <RowAlign>
                    <td>
                      <img src="https://pages.cortex-intelligence.com/hubfs/assinatura-de-email-cortex/logo-assinatura.png" alt="Logo empresa cortex intelligence" width="145" height="25" />
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <FieldName>{name}</FieldName>
                              {/* <h1 id="name" style={signatureStyles.name}>{name}</h1> */}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FieldOffice>{jobTitle}</FieldOffice>
                            </td>
                          </tr>
                          <tr>
                            <FieldPhone>
                              <a href={`tel:${phone}`}>{phone}</a>
                            </FieldPhone>
                          </tr>
                          <tr>
                            <FieldEmail>
                              <a href="https://www.cortex-intelligence.com">
                                www.cortex-intelligence.com
                              </a>
                            </FieldEmail>
                          </tr>
                          <tr>
                            <td>
                              <a href="https://www.linkedin.com/company/cortex-intelligence/mycompany/" target="_blank" rel="noopener noreferrer">
                                <img src="https://pages.cortex-intelligence.com/hubfs/assinatura-de-email-cortex/icon-linkedin.png" alt="Ícone Linkedin" />
                              </a>
                              <a href="https://www.facebook.com/beCortex/" target="_blank" rel="noopener noreferrer">
                                <img src="https://pages.cortex-intelligence.com/hubfs/assinatura-de-email-cortex/icon-facebook.png" alt="Ícone Facebook" />
                              </a>
                              <a href="https://www.instagram.com/becortex/" target="_blank" rel="noopener noreferrer">
                                <Icon>
                                  <img src="https://pages.cortex-intelligence.com/hubfs/assinatura-de-email-cortex/icon-instagram.png" alt="Ícone Instagram" />
                                </Icon>
                              </a>
                              <a href="https://www.youtube.com/c/CORTEXINTELLIGENCE" target="_blank" rel="noopener noreferrer">
                                <img src="https://pages.cortex-intelligence.com/hubfs/assinatura-de-email-cortex/icon-youtube.png" alt="Ícone Youtube" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </RowAlign>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <Banner>
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td>
                      <a href="https://pages.cortex-intelligence.com/tendencias-de-comunicacao-na-midia-e-bolhas-de-informacao" target="_blank" rel="noopener noreferrer">
                        <img src="https://pages.cortex-intelligence.com/hubfs/assinatura-de-email-cortex/banner-email.png" width="100%" alt="Banner" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Banner>
            <td></td>
          </tr>
        </tbody>
      </Container>
    </Preview>
  );
}
