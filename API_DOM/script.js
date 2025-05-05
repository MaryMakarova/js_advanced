const classes = [
    {
        id: 1,
        name: "Йога",
        time: "10:00 - 11:00",
        maxParticipants: 10,
        currentParticipants: 7
    },
    {
        id: 2,
        name: "Пилатес",
        time: "11:30 - 12:30",
        maxParticipants: 8,
        currentParticipants: 8
    },
    {
        id: 3,
        name: "Бокс",
        time: "13:00 - 14:00",
        maxParticipants: 12,
        currentParticipants: 5
    }
];

const scheduleContainer = document.getElementById('schedule');

function renderSchedule() {
    scheduleContainer.innerHTML = '';
    classes.forEach((lesson) => {
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4';

        card.innerHTML = `
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${lesson.name}</h5>
              <p class="card-text">Время: ${lesson.time}</p>
              <p class="card-text">Максимум: ${lesson.maxParticipants}</p>
              <p class="card-text">Участников: <span id="participants-${lesson.id}">${lesson.currentParticipants}</span></p>
              <button class="btn btn-success me-2" id="join-${lesson.id}">Записаться</button>
              <button class="btn btn-danger" id="cancel-${lesson.id}">Отменить запись</button>
            </div>
          </div>
        `;

        scheduleContainer.appendChild(card);

        const joinBtn = document.getElementById(`join-${lesson.id}`);
        const cancelBtn = document.getElementById(`cancel-${lesson.id}`);

        function updateButtons() {
            joinBtn.disabled = lesson.currentParticipants >= lesson.maxParticipants;
        }

        joinBtn.addEventListener('click', () => {
            if (lesson.currentParticipants < lesson.maxParticipants) {
                lesson.currentParticipants++;
                document.getElementById(`participants-${lesson.id}`).textContent = lesson.currentParticipants;
                updateButtons();
            }
        });

        cancelBtn.addEventListener('click', () => {
            if (lesson.currentParticipants > 0) {
                lesson.currentParticipants--;
                document.getElementById(`participants-${lesson.id}`).textContent = lesson.currentParticipants;
                updateButtons();
            }
        });

        updateButtons();
    });
}

renderSchedule();
