const events = [
    {
        id: 1,
        title: "Basketball Game",
        category: "athletics",
        image: "https://media.discordapp.net/attachments/1468775507922260141/1501022177049448468/basketball.webp?ex=69fa8f56&is=69f93dd6&hm=e2f93c19c928f2ff86d8f8bec2f03ab609cf7744c3dcb51d05e43994248681c7&=&format=webp&width=807&height=454",
        time: new Date("2026-05-08"),
        starttime: "9:00 AM - 10:00 PM"
    },
    {
        id: 2,
        title: "Club Rush",
        category: "social",
        image: "https://media.discordapp.net/attachments/1468775507922260141/1501022177418412163/clubrush.jpg?ex=69fa8f56&is=69f93dd6&hm=1317d85b722139c5c371f5138e310b17e09cd85d78de534c3ab863c210ca58ba&=&format=webp&width=807&height=541",
        time: new Date("2026-05-11"),
        starttime: "12:00PM - 2:00PM"
    },
    {
        id: 3,
        title: "Rooted in Resilience",
        category: "workshop",
        image: "https://www.eventbrite.com/e/_next/image?url=https%3A%2F%2Fimg.evbuc.com%2Fhttps%253A%252F%252Fcdn.evbuc.com%252Fimages%252F1179127735%252F2246586678223%252F1%252Foriginal.20260305-174007%3Fcrop%3Dfocalpoint%26fit%3Dcrop%26w%3D1880%26auto%3Dformat%252Ccompress%26q%3D75%26sharp%3D10%26fp-x%3D0.5%26fp-y%3D0.5%26s%3D66d1918a33407ec9de5a0c22a0ff674b&w=1880&q=75",
        time: new Date("2026-05-08"),
        starttime: "5:00PM - 6:30PM"
    }
];

let filters = {
    category: 'all',
    date: 'all',
    time: 'all',
    starttime: 'all'
}

const eventsGrid = document.getElementById('events-grid');
const resetButton = document.getElementById('reset-filters');
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filterType = this.dataset.filter;
        const filterValue = this.dataset.value;

        document.querySelectorAll('.filter-btn[data-filter="${filterType}"]').forEach(btn => {
            btn.classList.remove('active');
        })
        this.classList.add('active');

        filters[filterType] = filterValue;

        eventsGrid.classList.add('pulse');
        setTimeout(() => {
            eventsGrid.classList.remove('pulse');
        }, 500);
    });
})