export const paragraphs = [
    `<p>Hi, my Name is Mihai. I'm ${calculateAge()} years old. I leave in Germany and my passion is <b>programming Computers</b>.</p>`,

    `<p>I was born in <b>Brasov, Romania</b>. I graduated in a technological high school as a <b>computing technician Operator</b>.</p>`,

    `<p>Back in 2010, after school, i traveled to my mother in Germany. She lives in <b>Rosenheim, Bavaria</b>.
        There I follow a Curse on German Language for Immigrants working beside a Restaurant as a Dishwasher.
    </p>`,

    `<p>After graduating the German Language Curse with a B1 Degree in 2011, I started working at a Factory, operating <b>CNC cutting machines</b>.</p>`,

    `<p>At this point I've started to self educate myself on programming computers.
        Started by following tutorials on the internet and reading books.
        The most used source of learning was the <b><a href="https://www.cprogramming.com/" target="_blank">cprogramming.com</a></b> website. And the book <b><i>"Jumping into C++"</i></b> by <b>Alex Allain</b>.
    </p>`,

    `<p>After finishing the book I started to learn graphics programming following the tutorials on <b><a href="https://learnopengl.com/" target="_blank">learnopengl.com website</a></b>.
        There I come across the <b><a href="https://www.khanacademy.org/" target="_blank">Khan Academy Platform</a></b>. A free online education program. Where I start learning Mathematics, Computer Science and Computer Programming.
    </p>`,

    `<p>In March 2015 my daughter <b><i>Sofia Teodora</i></b> was born, and later that year I graduated my professional training as a <b>Machine and Production Facility Operator</b>.
        From there on I worked as a driver on a Forklift truck until April 2021.
    </p>`,

    `<p>At mid of year 2020 I was recruited by the <b><a href="https://developerakademie.com/" target="_blank">Developer Akademie Team</a></b>. They trained me to become a <b>Front-end Developer</b>.
        Here I learn to build websites through intensive coaching, online seminars, video conferences.
        Today I learned to develop websites using the <b>Angular framework</b>.
    </p>`,

    `<p>After finishing the Training as a <b>Front-End Developer</b> at Developer Akademie, they offer me a job as a <b>Senior Developer</b>.
        So i started on April 2021 to work as a <b>Web Developer</b> and <b>Javascript Coach</b>.
    </p>`,

    `<p>Besides programming, I am also interested in social and economic movements. In particular <b><a href="https://www.thevenusproject.com/" target="_blank">The Venus Project Organisation</a></b>.</p>`
];

function calculateAge(){
    let birthYear = 1990;
    let currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}