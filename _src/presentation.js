import React from 'react';
import { Deck, Heading, ListItem, Image, List, Quote, Slide, Text, Appear, Cite, BlockQuote, Notes } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

/*
Tópicos

# Tela com botão de um lado

## Está correto o botão deste lado de acordo com a usabilidade?

### Imagem

fonte para botoes em popup
https://uxmovement.com/buttons/why-ok-buttons-in-dialog-boxes-work-best-on-the-right/

---

# Don Normal

---

# Panda

---

# Fitts

# Higgs

---

# De volta à questão inicial

## Está correto o botão deste lado de acordo com a usabilidade?

### Imagem

---

# Exemplo Gitlab / github - posição do botão diferente

## Usabilidade é ter consistencia



*/

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary" bgImage="assets/ui-ux.png">
          <Heading fit margin={'20% 0 0 0'} caps lineHeight={1} textColor="tertiary">
            UX - Experiência do Usuário
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Em uma conversa do dia-a-dia
          </Heading>
          <Appear>
            <Image src="assets/login-groupon.png" />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Em uma conversa do dia-a-dia
          </Heading>
          <Image src="assets/confirm-right-aligned.png" />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Necessidade: Estudar sobre o assunto
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" bgImage="assets/donnorman.jpeg">
          <Heading size={5} textColor="secondary" caps margin="0 0 45% 0">
            O que é Experiência do Usuário?
          </Heading>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          textColor="primary"
          bgImage="assets/donnorman.jpeg"
          bgDarken={0.5}
        >
          <Heading size={5} margin="0 0 35% 0" textColor="primary" caps>
            O que é Experiência do Usuário?
          </Heading>
          <List>
            <ListItem>Termo criado por Don Norman nos anos 90</ListItem>
            <Appear>
              <ListItem>Engenheiro da Apple</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          textColor="primary"
          bgImage="assets/donnorman.jpeg"
          bgDarken={0.6}
        >
          <BlockQuote>
            <Quote textSize={40}>
              ...interface do usuário e usabilidade eram muito restritos, eu queria cobrir todos os aspectos da
              experiência de uma pessoa com o sistema, incluindo design industrial, gráficos, a interface, a interação
              física e o manual. Desde então o termo tem se espalhado amplamente...
            </Quote>
            <Cite>Don Norman</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['slide']}>
          <Heading size={5} textColor="secondary" caps>
            Evolução da Experiência do Usuário
          </Heading>

          <Image src="assets/evolucao_experiencia_usuario.png" width="110%" />
          <Notes>
            <List>
              <ListItem textSize={28}>Utilidade: computador facilita operações de rotina.</ListItem>
              <ListItem textSize={28}>Usabilidade: Facilidade e eficiência no uso.</ListItem>
              <ListItem textSize={28}>
                Rentabilidade: aspectos para aumentar a lucratividade. (visitantes, funil de vendas, comportamento do
                usuário)
              </ListItem>
              <ListItem textSize={28}>
                Estrategibilidade: Design da Experiência do Usuário influenciando a estratégia do negócio.
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Image src="assets/ux-umbrella.png" width="150%" />
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Image src="assets/Ux_Usability.png" width="150%" />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary" caps>
            UX no mundo real
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image src="assets/buttons.jpg" width={800} />
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary">
          <Heading size={5} textColor="primary" caps>
            Princípios
          </Heading>

          <Text textColor="primary">
            Por que alguns produtos satisfazem os consumidores, enquanto outros os deixam completamente frustrados?
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={5} textColor="primary" caps>
            Princípios
          </Heading>
          <List textColor="primary">
            <ListItem>Visibilidade</ListItem>
            <ListItem>Feedback</ListItem>
            <ListItem>Restrições</ListItem>
            <ListItem>Mapeamento</ListItem>
            <ListItem>Consistência</ListItem>
            <ListItem>Affordance</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary">
          <Heading size={5} textColor="primary" caps>
            Visibilidade
          </Heading>

          <Text textColor="primary">O que eu posso fazer?</Text>
          <Text textColor="primary">Como eu posso fazer?</Text>
          <Text textColor="primary">O que vai acontecer?</Text>
          <Appear>
            <Image src="assets/porta.jpg" width="50%" />
          </Appear>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={5} textColor="primary" caps>
            Visibilidade
          </Heading>
          <Image src="assets/charlie-brown-normandoors.gif" />
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary">
          <Heading size={5} textColor="primary" caps>
            Feedback
          </Heading>
          <Text textColor="primary">áudio, tátil, visual ou a combinação destes</Text>
          <Appear>
            <Image src="assets/feedback.png" />
          </Appear>
        </Slide>
        <Slide transition={['slide', 'fade']} bgColor="tertiary" textColor="primary">
          <Heading size={5} textColor="primary" caps>
            Restrições
          </Heading>
          <Text textColor="primary">
            A maneira mais segura de tornar alguma coisa fácil de usar, com poucos erros, é tornar impossível de fazê-la
            de outro modo, restringindo a quantidade de escolhas.
          </Text>
          <Appear>
            <Image src="assets/restricoes.png" />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <Heading size={5} textColor="primary" caps>
            Restrições
          </Heading>
          <Image src="assets/restricoes-2.png" />
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary">
          <Heading size={5} textColor="primary" caps>
            Mapeamento
          </Heading>
          <Text textColor="primary">Relacionar com o mundo real</Text>
          <Appear>
            <Image src="assets/mapping.png" />
          </Appear>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary">
          <Heading size={5} textColor="primary" caps>
            Mapeamento
          </Heading>
          <Image src="assets/mapeamento.jpeg" />
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary">
          <Heading size={5} textColor="primary" caps>
            Consistência
          </Heading>
          <Text textColor="primary">Operações similares com elementos similares para realizar tarefas semelhantes</Text>
          <Appear>
            <Image src="assets/consistencia.png" />
          </Appear>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary">
          <Heading size={5} textColor="primary" caps>
            Affordance
          </Heading>
          <Text textColor="primary">Saber como usar por ser óbvio</Text>
          <Appear>
            <Image src="assets/affordance.png" />
          </Appear>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary">
          <Heading size={5} textColor="primary" caps>
            Affordance
          </Heading>
          <Image src="assets/teapot.jpeg" />
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Image src="assets/uiuxusability.jpg" />
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          Panda
        </Slide>
      </Deck>
    );
  }
}
