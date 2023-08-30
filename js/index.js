const scrollButtons = document.getElementsByName('buttonGoTo');
const companyButtons = document.getElementsByName('buttonChangeCompany');
const trainingButtons = document.getElementsByName('trainingButton');
let targetSectionId = 4;
let targetCourseId = 3;

document.addEventListener('DOMContentLoaded', () => {
    let targetCompany = companies.find((company) => company.id === 4);
    let targetCourse = courses.find((course) => course.id === 3);
    changeCourse(targetCourse);
    changeCompany(targetCompany);
});

scrollButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const targetSectionId = btn.getAttribute('data-target');
        const targetSection = document.getElementById(targetSectionId);
        if(targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    })
});

companyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let newTargetSectionId = btn.getAttribute('company-id');
        if(+newTargetSectionId === targetSectionId) {
            return;
        }
        targetSectionId = +newTargetSectionId;
        const targetCompany = companies.find((company) => company.id === targetSectionId);
        changeCompany(targetCompany);
       
    })
})

function changeCompany(targetCompany) {
    let companyTitle = document.getElementById('companyTitle');
    setContentTransitioned(`<p>${targetCompany.name}</p>`, companyTitle);
    let companyInfo = document.getElementById('companyInfo');
    setContentTransitioned(`<p>${targetCompany.text}</p>`, companyInfo);
}

function changeCourse(targetCourse) {
    let courseTitle = document.getElementById('courseTitle');
    setContentTransitioned(`<p>${targetCourse.name} <span class="place" id="course-place">${targetCourse.local}</span></p>`, courseTitle);
    let courseDescription = document.getElementById('courseDescription');
    setContentTransitioned(`<p>${targetCourse.text}</p>`, courseDescription);
}

trainingButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log('chegou aqui')
        let newCourseId = btn.getAttribute('course-id');
        console.log(newCourseId);
        if(+newCourseId === +targetCourseId) {
            return;
        }
        targetCourseId = +newCourseId;
        const targetCourse = courses.find((course) => course.id === +targetCourseId);
        changeCourse(targetCourse);
        
    })
})

function setContentTransitioned(content, objectToSet) {
    objectToSet.style.transition = 'opacity 0.5s ease-in-out';
    objectToSet.style.opacity = 0;
    setTimeout(function() {
            objectToSet.innerHTML = content;
            objectToSet.style.opacity = 1;
    }, 400);

}

const companies = [
    {
        id: 1,
        name: 'TIVIT',
        text: 'Analista de Suporte de TI – Estágio - Responsável pelo atendimento e resolução de chamados do ERP SAP, SAP IS-MEDIA e sistemas legados de primeiro e segundo nível. Realização de consultas, validações e alterações em bases de dados (Oracle e SQL Server) com objetivo de resolver incidentes e solicitações.',
        year: '2020 - 2021'
    },
    {
        id: 2,
        name: 'HyperXpress Project',
        text: 'Desenvolvedor full-stack – Autônomo - Projeto de desenvolvimento E- commerce responsável por troca e venda de artigos no ramo de vestuário. '+
        'Atuei como Desenvolvedor neste projeto realizando desenvolvimento de novas funcionalidades destinadas ao negócio utilizando as tecnologias: Spring Framework, Java 8, Git, Github, MVC , S.O.L.I.D, Microsoft Azure, Amazon AWS, SQL Server, Jenkins, ReactJS, NGINX, Android.',
        year: '2021'
    },
    {
        id: 3,
        name: 'Capgemini',
        text: 'Consultor de Soluções Customizadas I – Responsável pelo desenvolvimento de novas funcionalidades e correção de bugs em sistemas de front-end e back-end utilizando as tecnologias: Java 11, Java 8, Spring Framework, PostgreSQL, Junit5, Jest, Angular, Redis, Typescript, Git, Github, Querydsl, Jenkins, HTML, CSS.',
        year: '2021 - 2022'
    },
    {
        id: 4,
        name: 'ACT Digital',
        text: 'Desenvolvedor Java – Responsável pelo desenvolvimento de novas funcionalidades e correção de bugs em sistemas de crédito de front e backend utilizando as técnologias: Java 8, EJB, Db2, Microsoft SQL Server, Angular, Adobe Flashbuilder, Angular, Docker, Git, Gitlab.',
        year: '2022 - Atualmente'
    }
]


const courses = [
    {
        id: 1,
        name: 'Mecatrônica',
        text: 'Curso Técnico em Mecatrônica realizado integrado ao Ensino Médio que me apresentou a tecnologia como carreira. A matéria de programação envolvia Linguagem C e C++ e Assembly associados a programação de microcontroladores como Arduino. Ganhamos premiação como melhor projeto de TCC, uma cervejeira artesanal automatizada, onde foi necessário conhecimento em Raspberry.  Foi a tecnologia utilizada para fazer todo o seu controle desde a temperatura ideal para fazer cerveja até o tempo de cozimento para cada tipo de preparo.',
        year: '2016 - 2018',
        local: 'ETEC Jorge Street'
    },
    {
        id: 2,
        name: 'Engenharia de Controle e Automação',
        text: 'Bacharelado em Engenharia de Controle e Automação. Foi meu primeiro contato com uma universidade, fiquei apenas um ano na mesma devido a distância não consegui permanecer. Adquiri grande paixão pelo mercado de programação quando vi pela primeira vez a linguagem C# na matéria de programação de computadores. Foi o maior incentivo inicial para correr atrás de uma faculdade de tecnologia pois a partir dali me tornou um sonho trabalhar com programação.',
        year: '2019',
        local: 'IFSP Cubatão'
    },
    {
        id: 3,
        name: 'Análise e Desenvolvimento de Sistemas',
        text: 'Ensino Superior Completo no ano de 2021 carregando alguns projetos ao longo do caminho e trazendo 2 experiências profissionais distintas durante o processo de formação. Carrego comigo uma experiência acadêmica repleta de desafios como o ingresso no mercado da programação pois realizei meu estágio no mercado de suporte em SAP. A maior entrega dentre os anos de faculdade foi o projeto HyperXpress onde tive a oportunidade de trabalhar com todo o tipo de tecnologia, entregamos um e-commerce completo de compra venda e troca de artigos no ramo de vestuário, com balanceamento de carga e infraestrutura toda construida no AWS, release automática utilizando o Jenkins e 2 Apps frontend para consumir as APIs feitas em java, um app mobile e outro desktop. Todo esse processo com apenas 1 ano de prazo.',
        year: '2020 - 2021',
        local: 'SPTech School'
    }

]

