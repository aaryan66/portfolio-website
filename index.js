var container = document.querySelector('.container');
var about = document.querySelector('.about');
var home = document.querySelector('.homes')
var skills = document.querySelector('.skills')
var projects = document.querySelector('.project')
var page_bd = document.querySelector('.bd')
var sideNav  = document.querySelector('.sideNav')
var skill= document.querySelector('.skill')
var git = document.querySelector('.fa-github')
about.addEventListener("click", function() {
    container.innerHTML = 
    "<h1 style = 'font-size: 65px; ' class = 'homeHead'><span class = 'aaryan'>About</span><span class = 'bhurtel'>Me<span></h1><p class = 'bd'>Hey, I'm Aaryan Bhurtel, an 8th grader at Chelsea World School, and coding is my jam. I'm into languages like HTML, CSS, JavaScript, Tailwind, and Bootstrap. It all started when I was a curious kid in Nepal, and my parents noticed my fascination with computers. They got me into computer classes, and I quickly fell in love with coding, especially HTML and CSS. <br><br> Now, at Chelsea World School, I've taken my coding skills up a notch. I spend my free time learning and experimenting. I've moved beyond the basics to tackle JavaScript, which lets me make websites do cool things. I've built my websites from scratch, created blogs, forms, and even some simple games. My classmates and teachers are often amazed by what I can do. Coding isn't just a hobby; it's a way for me to bring ideas to life and solve real-world problems. I'm excited about the future and can't wait to keep learning and creating with code.<br><br> In conclusion, my journey into the world of coding is nothing short of inspiring. Starting as a curious child in Nepal, I have grown into a proficient coder with a passion for HTML, CSS, JavaScript, Tailwind, and Bootstrap.</p>"
    about.style.color = "yellow"; 
    home.style.color = "gray";
    projects.style.color = "gray"
    skills.style.color = "gray"
    event.preventDefault();
});

projects.addEventListener("click", function() {
    container.innerHTML  = '<h1 style= "font-size :65px ;" class = "aaryan homeHead"> Projects</h1> <br> <div class="cards"><div class="pr1"><img src="todo.png" alt=""><hr><h1>ToDo List</h1><h3>JS, HTML, BOOTSTRAP</h3><hr><p>This is a simple todo list made using html, bootsrap and js. This was first prjoect made by me using JS</p></div><div class="pr2"><img src="AK.png" alt=""><hr><h1>Personal Page</h1><h3>JS, HTML, CSS</h3><hr><p>This is one of my favorite page made using HTML, CSS and JS. It is the project I dreamt to make when I was about to learn front end web dev</p></div><div class="pr3"><img src="analog.png" alt=""><hr><h1>Analog Clock</h1><h3>HTML, CSS, JS, BOOTSTRAP</h3><hr><p>This is the most simple project I have ever made. I wrote the code while learning js and was easiest one. </p></div></div>'
    projects.style.color = "yellow"
    home.style.color = "gray"
    about.style.color = "gray"
    skills.style.color = "gray"
    sideNav.style.height = "117vh"
    event.preventDefault()
})

skills.addEventListener("click", function() {
    container.innerHTML = "<h1 style = 'font-size: 65px;' class = 'aaryan homeHead'>Skills</h1> <br><br><div id='skill' class='skill'><div class='skill1'><div class='skillhtml'><h1>HTML ---- 90%</h1></div></div><div class='skill2'><div class='skillcss'><h1>CSS ---- 88%</h1></div></div><div class='skill3'><div class='skillJS'><h1>JS ---- 85%</h1></div></div><div class='skill4'><div class='skillbt'><h1>Bootstrap ---- 75%</h1></div></div></div>"
    skills.style.color = "yellow"
    home.style.color = "gray"
    about.style.color = "gray"
    projects.style.color = "gray"
    event.preventDefault()
})

home.addEventListener("click", function () {
    container.innerHTML = '<h1 class="mainHead homeHead"> <span class="aaryan">Aaryan</span> <span class="bhurtel">Bhurtel</span></h1><p class="bd">I am an 8th grader student working in HTML, CSS, Bootstrap, and Tailwind. While working with these languages and making some projects, I am confident about my skills and now looking forward to learning backend development.</p><div class="icons"><i><a style="text-decoration: none; font-size: 3rem;" target="_blank" href="https://facebook.com/66aaryan" class="fab fa-facebook"></a></i><a style="text-decoration: none; font-size: 3rem;" target="_blank" href="https://github.com/aaryan66" class="fab fa-github"></a><a style="text-decoration: none; font-size: 3rem;" target="_blank" href="https://www.linkedin.com/in/aaryan-bhurtel-bb98a61b2/" class="fab fa-linkedin"></a></div>'
    home.style.color = "yellow"
    skills.style.color = "gray"
    projects.style.color = "gray"
    about.style.color = "gray"
})