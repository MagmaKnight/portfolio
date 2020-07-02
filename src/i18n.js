import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Você, pessoa que está lendo esse código. eu sei que esse é absolutamente
// o pior jeito possível de traduzir, e que isso deveria ser feito atravez de um backend de i18next
// com arquivos .json,
// mas após uma semana sem conseguir fazer o hashrouter funcionar com o i18next
// eu decidi fazer assim. Perdoe o espaguete a seguir.

// You, person reading this code. I know this is absolutely
// the worst possible way to translate a react app, and that this should be done
// through an i18next backend with .json files,
// but after a week without being able to make hashrouter work with i18next
// I decided to build it like this. Forgive me for what you're about to see.

// translating class or function guide
// add import
// import { withTranslation } from 'react-i18next';
// add this before return and after render
// const { t } = this.props;
// {t('title', 'default text')}
// withTranslation()(Class or function name)

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true ,
		whitelist: ['pt', 'en'],
		nonExplicitWhitelist: true,
		load: "languageOnly",
		interpolation: {
			escapeValue: false,
		},
		resources: {
			// big oof
			en: {
				translation: {
					intro: "Welcome",
					intro2:
						"Hello, my name is Luchas Arie, I'm a student from Brazil that loves all things computers.",
					intro3:
						"Check out my projects, skills, some info about me, and contact information, by clicking on the volcano on the top left corner.",
					card1: "Welcome",
					card2: "Skills",
					card3: "About",
					card4: "Projects",
					card5: "Contact Me!",
					personal: "Personal",
					abouttext1:
						"I love computers, programming, coffee, and things related to those things.",
					abouttext2:
						"Currently looking for a job in the IT field or for freelance work, both Front-end and Back-end.",
					education: "Education",
					educationlevel: "High School",
					fecap: "FECAP - Fundação Escola de Comércio Alvares Penteado",
					smallfecap1: "From 2018 to Today",
					smallfecap2:
						"Getting my High School degree alongside a certificate in Administration.",
					job: "Job Experiences",
					jobtext: "Eager to have my first job or first work with freelance.",
					contact1: "Contact me at",
					contact2: "Or check me out at",
					project1: "Projects",
					project2:
						"Click the Github Icon for the repo, or the Package icon for latest release.",
					projectsite1: "This Site",
					projectsite2:
						"Portfolio site created using React.js and a lot of coffee.",
					moodlecalendar1: "Moodle Calendar",
					moodlecalendar2:
						"A python program built with PyQt5 and WebDriver that checks a student's moodle for quizzes and assignments.",
					tkalculator1: "TKalculator",
					tkalculator2: "A simple calculator built using Python and Tkinter.",
					skill1: "Skills",
					skill2: "Click on any of the icons for more details.",
					css1: "Cascading Style Sheets 3",
					css2:
						"I have studied CSS alongside HTML since I was little, making small websites for personal projects. I am aware of proper CSS practice, avoiding styling outside of the CSS files.",
					git1: "GIT",
					git2:
						"I am a regular user of Github, and know how to use the Git VCS system very well. Commits, pushes, branches, forks, all are tools that I am knowledgeable on their uses and versatilities.",
					git3:
						"You can check out my Github on the contact me section, or by clicking the Github icon above.",
					html1: "Hyper Text Markup Language 5",
					html2:
						"I have often built many small websites examples when I was young, having done several of them for school projects. I also worked on a character sheet based only on HTML and CSS on the popular TRPG site Roll20, the code of which is still hosted on my Github, you can check it below.",
					javascript1: "Javascript (ES6)",
					javascript2:
						"I learned Javascript in 2019, when I was setting up my first Tampermonkey scripts to assist me out in boring tasks.I would call myself a beginner at it, still, but I'm learning more every day.",
					office1: "Office Tools",
					office2:
						"I use Excel, Word and Powerpoint almost daily. I'm used to having detailed spreadsheets to control my finances, writing documentation and some personal projects on Word, and making powerpoint presentations.",
					office3:
						"I also know enough VBA to make small Excel macros and scripts.",
					php1: "PHP Hypertext Processor",
					php2:
						"I have, on my computer, a WAMP stack which I use to develop small, personal web applications, and PHP ties it all together. One of my current projects in development is written in PHP, and I'm learning more about it every day.",
					python1: "Python 3.8",
					python2:
						"My favorite programming language. I started out with Python, and have written a couple programs with it, the latest of which being the Moodle Calendar. I have experience in some libraries, and am looking forward to learning data science with it.",
					python3: "Libraries",
					python4:
						"Selenium Webdriver, OpenCV 4, PyQt 5, Tesseract, Tkinter, Numpy",
					reactjs1: "React JS",
					reactjs2:
						"React JS was quite the beast to start learning, but I consider myself an intermediate at it. I plan on also learning Angular soon enough.",
					reactjs3:
						"This entire site was built using React JS , React Bootstrap, React Router and react-i18next. Repo available below",
					sql1: "Server Query Language",
					sql2:
						"I use MySQL on my WAMP installation, and I'm knowledgeable about the basic commands and functions of SQL.",
				},
			},
			pt: {
				translation: {
					intro: "Bem Vindo",
					intro2:
						"Olá, meu nome é Luchas Arie, sou um estudante do Brasil que ama tudo sobre computação.",
					intro3:
						"Dê uma olhada nas minhas habilidades, projetos, e talvez me mande uma oferta de emprego, clicando no vulcão no canto superior esquerdo.",
					card1: "Bem Vindo",
					card2: "Habilidades",
					card3: "Sobre",
					card4: "Projetos",
					card5: "Contato",
					personal: "Pessoal",
					abouttext1:
						"Eu amo computadores, café, programar, e tudo relacionado a essas coisas.",
					abouttext2:
						"Procurando por um emprego no campo de T.I. em geral, ou por trabalho freelance. Tenho habilidades em Front-end e Back-end",
					education: "Educação",
					educationlevel: "Colegial",
					fecap: "FECAP - Fundação Escola de Comércio Alvares Penteado",
					smallfecap1: "Desde 2018, até atualmente",
					smallfecap2:
						"Fazendo o colegial junto com ensino técnico de administração.",
					job: "Empregos anteriores",
					jobtext:
						"Ainda estou animado para ter meu primeiro emprego ou trabalho freelance.",
					contact1: "Me contate em",
					contact2: "Ou conheça mais sobre mim em",
					project1: "Projetos",
					project2:
						"Clique no icone do Github para o repositório, ou na caixa para a ultima versão.",
					projectsite1: "Esse Site",
					projectsite2:
						"Site de Portfolio criado usando React.js e muito café.",
					moodlecalendar1: "Moodle Calendar",
					moodlecalendar2:
						"Um programa Python feito com PyQt5 e Selenium WebDriver  que checa um Moodle de um aluno por lições de casa.",
					tkalculator1: "TKalculator",
					tkalculator2: "Uma calculadora simples em Python e Tkinter",
					skill1: "Habilidades",
					skill2: "Clique em qualquer dos ícones para mais detalhes.",
					css1: "Cascading Style Sheets 3",
					css2:
						"Eu estudei CSS junto com HTML desde que eu era pequeno, fazendo pequenos sites simples para projetos pessoais. Tenho uma boa noção de como animar e estilar objetos.",
					git1: "GIT",
					git2:
						"Eu uso o GitHub regularmente, e sei usar bem o VCS Git. Commits, pushes, branches, forks, como não deletar uma master, etc",
					git3:
						"Você pode checar o meu Github clicando em seu ícone acima, ou na parte de contatos.",
					html1: "Hyper Text Markup Language 5",
					html2:
						"Eu fiz vários sites quando eu era pequeno, a maioria para certos jogos ou projetos de escola. Eu também já contribui e construi uma ficha de personagem para o site de TRPG Roll20, a qual você pode acessar o códido-fonte abaixo.",
					javascript1: "Javascript (ES6)",
					javascript2:
						"Eu comecei a aprender javascript em 2019, fazendo scripts para o Tampermonkey para assistência com tarefas monótonas e repetitivas. Ainda me considero um iniciante na linguagem, apesar de estar aprendendo mais todo dia",
					office1: "Pacote Microsoft Office",
					office2:
						"Eu uso Excel, Word e Powerpoint quase diariamente. Estou acostumado a controlar minhas finanças com tabelas detalhadas, escrever documentos no Word e fazer apresentações com slides no powerpoint.",
					office3:
						"Eu também sei um pouco de VBA, o suficiente para fazer pequenos macros e scripts de excel.",
					php1: "PHP Hypertext Processor",
					php2:
						"Eu tenho uma stack WAMP no meu computador, com a qual estou desenvolvendo alguns pequenos projetos. E com o Apache, PHP é a linguagem a qual estou aprendendo e utilizando para esses projetos",
					python1: "Python 3.8",
					python2:
						"Minha linguagem de programação favorita. Eu comecei com Python, e já escrevi alguns programas, o último deles sendo o Moodle Calendar ",
					python3: "Bibliotecas",
					python4:
						"Selenium Webdriver, OpenCV 4, PyQt 5, Tesseract, Tkinter, Numpy",
					reactjs1: "React JS",
					reactjs2:
						"React JS foi bem díficl de começar a aprender. Esse site inteiro foi feito em React JS, como um projeto de aprendizado. Planejo aprender Angular em breve",
					reactjs3:
						"O site inteiro foi criado com React JS , React Bootstrap, React Router e react-i18next. Repositório público abaixo.",
					sql1: "Server Query Language",
					sql2:
						"Eu uso MySQL na minha instalação WAMP, e tenho conhecimento básico com os comandos e funções de SQL.",
				},
			},
		},
		fallbackLng: 'pt',
	});

export default i18n;
