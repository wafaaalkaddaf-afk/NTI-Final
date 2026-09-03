/* dashboard*/
function setProgress(value) {
  const circle = document.getElementById('dashboardProgress');
  if (!circle) return;

  const text = circle.querySelector('.progress-value');
  const clampedValue = Math.min(100, Math.max(0, value));

  circle.style.setProperty('--percentage', clampedValue);
  if (text) {
    text.textContent = `${clampedValue}%`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setProgress(60);
  const activeCourseCards = document.querySelectorAll('.active-courses-section .course-card');
  activeCourseCards.forEach((card) => {
    const continueBtn = card.querySelector('.btn-yellow');
    if (continueBtn) {
      continueBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.href = 'course.html';
      });
    }
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      window.location.href = 'course.html';
    });
  });
  const certButtons = document.querySelectorAll('.cert-btn');
  certButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const courseTitle = e.target.getAttribute('data-course');
      alert(`Certificate for: ${courseTitle}`);
    });
  });
  const taskButtons = document.querySelectorAll('.task-action-btn');
  taskButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = e.target.getAttribute('data-action');

      switch (action) {
        case 'quiz':
          window.location.href = 'course.html?screen=quizPage';
          break;
        case 'watch':
        case 'resume':
          window.location.href = 'course.html?screen=videoPlayer';
          break;
        case 'upload':
          alert('Opening Upload Portal for Final Project...');
          break;
        default:
          window.location.href = 'course.html';
      }
    });
  });
});

/* Switch between 3 screens*/
function showScreen(activeScreenId) {
  const screens = ['courseDetail', 'videoPlayer', 'quizPage'];
  screens.forEach((screenId) => {
    const el = document.getElementById(screenId);
    if (el) {
      if (screenId === activeScreenId) {
        el.classList.remove('d-none');
      } else {
        el.classList.add('d-none');
      }
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
