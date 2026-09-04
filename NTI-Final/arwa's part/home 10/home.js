const recommended = [
  ['UI/UX Design Fund', 'Armin Yusuf', '4.8', '5h 30m', 'Beginner'],
  ['Build AI Chatbots Python', 'Sarah Thompson', '4.6', '8h 10m', 'Intermediate'],
  ['Responsive Web Design', 'Dr. Leila Habib', '4.7', '3h 45m', 'Beginner'],
];

let trending = [
  ['UI/UX Design Bootcamp', 'Carlos Mendoza', '4.9', '7h 20m', 'Intermediate'],
  ['Mastering ChatGPT & AI', 'Sarah Thompson', '4.8', '5h 10m', 'All Levels'],
  ['Web Development React', 'John Adewale', '4.7', '12h 45m', 'Intermediate'],
];

let newCourses = [
  ['Introduction to Bootstrap', 'Daniel Morrison', '4.8', '4h 20m', 'Beginner'],
  ['Building REST APIs with Node.js', 'Youssef Ahmed', '4.7', '6h 25m', 'Intermediate'],
  ['Digital Illustration', 'Selam Bekele', '4.9', '3h 15m', 'Beginner'],
];

const categories = [
  ['UI/UX Design', 'Start with thinking and move to wireframes and prototyping'],
  ['Web Development', 'Learn HTML, CSS, JavaScript, then React and back-end'],
  ['AI & Machine Learning', 'Intro to AI, Python for ML, deep learning, projects'],
  ['Business & Marketing', 'Digital marketing, branding, analytics, and strategy'],
  ['Finance & Investing', 'Budgeting, financial literacy, investment strategies'],
  ['Personal Development', 'Productivity, communication, time management'],
  ['Languages', 'Learn English, French, Amharic, or more'],
  ['Education & Teaching', 'Learn effective teaching methods and curriculum design'],
];

const reviews = [
  ['MG', 'Marta G.', 'UI/UX Design Essentials', 'I started my first internship thanks to this platform! The structure and hands-on projects made learning fun and effective.'],
  ['ST', 'Samuel T.', 'Full Stack Development', 'Clear videos, engaging quizzes, and the project-based lessons were a game changer for me. Highly recommended!'],
  ['HK', 'Hana K.', 'Intro to AI', 'The best part was how easy it was to track my progress. I now feel confident applying AI concepts in my job.'],
];


let profile_Button = document.getElementById("profileButton");
let profile_Menu = document.getElementById("profileMenu");


profile_Button.addEventListener("click", function (event) {

  event.stopPropagation();
  profile_Menu.classList.toggle("show");
});

document.addEventListener("click", function (event) {

  if (!profileMenu.contains(event.target) && !profileButton.contains(event.target)) {
    profileMenu.classList.remove("show");
  }
});



  const seeMoreButtons = document.querySelectorAll('.see-more-btn');

        seeMoreButtons.forEach((button) => {
            button.addEventListener('click', function() {
              
                const sectionTitle = this.parentElement.querySelector('.section-title').innerText;
                alert('Opening more courses for: ' + sectionTitle);
            });
        });

     
        const courseCards = document.querySelectorAll('.card');

        courseCards.forEach((card) => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                const title = this.querySelector('.course-title').innerText;
                alert('Opening course details: ' + title);
            });
        });

        
function showCourses(listId, list, firstImage) {
  const place = document.querySelector(listId);
  place.innerHTML = list.map((course, index) => makeCourse(course, firstImage + index)).join('');
}

function showCategories() {
  const place = document.querySelector('#categoryList');
  place.innerHTML = categories.map((category) => `
    <div class="col-6 col-lg-3">
      <article class="category"><h3>${category[0]}</h3><p>${category[1]}</p></article>
    </div>`).join('');
}

function showReviews() {
  const place = document.querySelector('#reviewList');
  place.innerHTML = reviews.map((review) => `
    <div class="col-md-4">
      <article class="review">
        <div class="review-top"><div class="avatar">${review[0]}</div><div><h3>${review[1]}</h3><small>${review[2]}</small></div></div>
        <p>${review[3]}</p><div class="stars">★★★★★</div>
      </article>
    </div>`).join('');
}

function showToast(text) {
  const toast = document.querySelector('#toast');
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

showCourses('#recommendedList', recommended, 0);
showCourses('#trendingList', trending, 3);
showCourses('#newList', newCourses, 0);
showCategories();
showReviews();

document.querySelector('#resumeButton').addEventListener('click', () => showToast('Opening your current course...'));

document.querySelectorAll('.see-button').forEach((button) => {
  button.addEventListener('click', () => showToast(button.dataset.message));
});

document.querySelector('#emailForm').addEventListener('submit', (event) => {
  event.preventDefault();
  showToast('Thanks! You are on the list.');
  event.target.reset();
});

document.querySelector('#searchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const text = document.querySelector('#searchInput').value.trim();
  showToast(text ? `Searching for “${text}”...` : 'Type a course name to search.');
});

document.querySelector('#menuButton').addEventListener('click', () => {
  const menu = document.querySelector('.menu');
  const button = document.querySelector('#menuButton');
  menu.classList.toggle('open');
  button.setAttribute('aria-expanded', menu.classList.contains('open'));
});

const profileButton = document.querySelector('#profileButton');
const profileMenu = document.querySelector('#profileMenu');

profileButton.addEventListener('click', () => {
  profileMenu.classList.toggle('hide');
  profileButton.setAttribute('aria-expanded', !profileMenu.classList.contains('hide'));
});

document.querySelector('#reviewNext').addEventListener('click', () => showToast('Next testimonials'));
document.querySelector('#reviewBack').addEventListener('click', () => showToast('Previous testimonials'));
