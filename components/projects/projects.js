const projectList = [
    {
        title:'Immunization Tracker',
        description: 'Immunization Tracker appeals to three distinct groups of people: Parents who want to keep track of their children\'s immunization history, adult patients who want to log their own immunization history, and providers who can keep track of their patient\'s records and update them accordingly',
        image:'../images/projects/immunization-tracker.gif',
        tech:'html;css;javascript;jquery',
        deploy:'immunization-tracker.netlify.com',
        repo:'https://github.com/immunization-tracker/immunization-tracker-UI',
        responsiblity:'Create a wireframe that will be used as a starting point.;Collaborate with other UI developers on creating a landing page for Immunization Tracker.; a solo page (Help) to demonstrate personal ability.'
    },
    {
        title:'Portfolio',
        description: 'A website portfolio for myself',
        image:'../images/projects/immunization-tracker.gif',
        tech:'html;css;javascript',
        deploy:'arvinagas.com',
        repo:'https://github.com/arvagas/arvagas.github.io',
        responsiblity:'Utilize the knowledge acquired to create a website marketing myself to show the world what they\'re missing out on'
    },
]




// const topicsBar = document.querySelector('.topics')

// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(data => {
//         console.log('API data for topics succesfully retrieved:', data)
//         const extractTopics = data.data.topics
//         extractTopics.forEach(topic => {
//             topicsBar.appendChild(topicTabs(topic))
//         })
//     })
//     .catch(error => {
//         console.log('API for topics currently down:', error)
//     })

// function topicTabs(name) {
//     // Create element
//     const tab = document.createElement('div')

//     // Set attribute
//     tab.textContent = name
//     tab.dataset.tab = name

//     // Set classes
//     tab.classList.add('tab')

//     // Button event
//     tab.addEventListener('click', () => selectTab(tab))

//     return tab
// }

// function selectTab(clickedTab) {
//     const tabs = document.querySelectorAll('.tab')
//     const cards = document.querySelectorAll('.card')

//     if (clickedTab.classList.contains('active-tab')) {
//         clickedTab.classList.remove('active-tab')

//         cards.forEach(card => card.style.display='block')
//     } else {
//         tabs.forEach(tab => tab.classList.remove('active-tab'))

//         cards.forEach(card => card.style.display='none')
    
//         clickedTab.classList.add('active-tab')
    
//         cards.forEach(card => {
//             if (card.dataset.tab === clickedTab.dataset.tab) card.style.display = 'block'
//             // node.js will not have any cards because the article and topic api list them differently (topic[node.js] & article[node])
//         })
//     }
// }