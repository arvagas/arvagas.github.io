const projectArray = [
    {
        title:'Immunization Tracker',
        description: 'A safe way to keep track of your immunizations records digitally.',
        image:'../images/projects/immunization-tracker.gif',
        tech:'HTML;CSS;JavaScript;jQuery',
        deploy:'https://immunization-tracker.netlify.com',
        repo:'https://github.com/immunization-tracker/immunization-tracker-UI',
        design: 'https://designer.gravit.io/?token=9MdZAdiV5YcYD2dddEWD_JPy0gE9Rk-9',
        responsibility:'Created a wireframe that was used as a starting point.;Collaborated with other UI developers on creating a landing page.;Created a solo page (Help) to demonstrate understanding of HTML/CSS/JavaScript.'
    },
    {
        title:'Portfolio',
        description: 'A website portfolio for myself.',
        image:'',
        tech:'HTML;CSS;JavaScript;jQuery',
        deploy:'https://arvinagas.com',
        repo:'https://github.com/arvagas/arvagas.github.io',
        design: null,
        responsibility:'Utilized the knowledge acquired to create a website marketing myself to show the world what they\'re missing out on.'
    },
]

const projectsSection = document.querySelector('.projects-content')

projectArray.forEach(project => {
    projectsSection.appendChild(projectsCard(project))
})

function projectsCard(projectData) {
    // Create elements
    const project = document.createElement('div')
    const title = document.createElement('h1')
    const description = document.createElement('h2')
    const linksBox = document.createElement('div')
    const deploy = document.createElement('a')
    const breakOne = document.createElement('p')
    const repo = document.createElement('a')
    const breakTwo = document.createElement('p')
    const design = document.createElement('a')
    const responsibility = document.createElement('ul')
    const responsibilityArray = projectData.responsibility.split(";")
    const tech = document.createElement('p')
    const techArray = projectData.tech.split(';')

    // Structure elements
    project.appendChild(title)
    project.appendChild(description)
    project.appendChild(linksBox)
    linksBox.appendChild(deploy)
    linksBox.appendChild(breakOne)
    linksBox.appendChild(repo)
    linksBox.appendChild(breakTwo)
    linksBox.appendChild(design)
    project.appendChild(responsibility)
    responsibilityArray.forEach(item => {
        const resp = document.createElement('li')
        resp.textContent = item
        responsibility.appendChild(resp)
    })
    project.appendChild(tech)

    // Set attributes
    title.textContent = projectData.title
    description.textContent = projectData.description
    deploy.textContent = 'Deploy'
    deploy.href = projectData.deploy
    breakOne.textContent = ' | '
    repo.textContent = 'Github'
    repo.href = projectData.repo
    breakTwo.textContent = ' | '
    design.textContent = 'Design'
    design.href = projectData.design
    tech.textContent = techArray.join(', ')
    
    // Special case for design property
    if (projectData.design === null) {
        breakTwo.style.display = 'none'
        design.style.display = 'none'
    }

    // Assign class names
    project.classList.add('project-container')
    title.classList.add('project-title')
    description.classList.add('project-desc')
    linksBox.classList.add('project-links')
    responsibility.classList.add('project-responsibility')
    tech.classList.add('project-tech')

    return project
}