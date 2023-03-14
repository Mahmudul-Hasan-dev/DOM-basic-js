const sections = document.querySelectorAll('section');
for (let section of sections) {
    // console.log(section);
    console.log(section.style)
    section.style.background = 'pink';
    section.style.border = ' 2px solid black';
    section.style.padding = ' 12px';
    section.style.margin = '5px';
}

const titles = document.querySelectorAll('h3');
for (let title of titles) {
    title.style.color = 'white';
}
const places = document.getElementById('places-container');
places.classList.add('text-center');
