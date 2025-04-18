import Banner from "../../components/Banner"
import ProductsList from "../../components/ProductsList"
import Game from "../../models/Game"

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zeld from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'


const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 
      'Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident,
  },
  {
    id: 2,
    category: 'Ação',
    description: 
      'Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes.',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$290,00'],
    image: resident,
  },
  {
    id: 3,
    category: 'Ação',
    description: 
      'Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident,
  },
  {
    id: 4,
    category: 'Ação',
    description: 
      'Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident,
  }
]

const emBreve: Game [] = [
  {
    id: 5,
    category: 'RPG',
    description: 'Junte-se à luta por Santuário no Diablo® IV, a aventura suprema de RPG de ação. Vivencie a campanha aclamada pela crítica e os novos conteúdos de temporada.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo,
  },
  {
    id: 6,
    category: 'RPG',
    description: 'Esqueça tudo que você sabe sobre os jogos da série The Legend of Zelda. Entre em um mundo de descobertas, exploração e aventura em The Legend of Zelda: Breath of the Wild, o novo jogo da famosa série que veio para romper barreiras. Viaje pelos vastos campos, florestas e montanhas enquanto descobre o que aconteceu com o reino de Hyrule nesta deslumbrante aventura a céu aberto.',
    title: 'The Legend Of Zelda: Breath of The Wild',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: zeld,
  },
  {
    id: 7,
    category: 'RPG',
    description: 'A história de Cal Kestis continua em Star Wars Jedi: Survivor™, uma aventura em terceira pessoa na galáxia da Respawn Entertainment, desenvolvida em colaboração com a Lucasfilm Games. Este título de jogo solo guiado pela narrativa começa 5 anos após os eventos de Star Wars Jedi: Fallen Order™, acompanhando a luta cada vez mais desesperada de Cal enquanto a galáxia se torna ainda mais sombria. Empurrado para os limites da galáxia pelo Império, Cal se verá cercado por ameaças novas e conhecidas. Como um dos últimos Cavaleiros Jedi sobreviventes, Cal precisa mostrar seu valor durante o momento mais sombrio da galáxia, mas até onde ele está disposto a ir para proteger a si, sua equipe e o legado da Ordem Jedi?',
    title: 'STAR WARS Jedi: Survivor',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars,
  },
  {
    id: 6,
    category: 'RPG',
    description: 'Junte-se à luta por Santuário no Diablo® IV, a aventura suprema de RPG de ação. Vivencie a campanha aclamada pela crítica e os novos conteúdos de temporada.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['17/05'],
    image: resident,
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title='Promoções' background='gray' />
    <ProductsList games={emBreve} title='Em breve' background='black' />
  </>
)

export default Home