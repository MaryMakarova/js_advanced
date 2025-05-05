const ACCESS_KEY = 'ljxXgAgNEUsONyQiD2hOWeBPg-sHP8TpHbXFOb6HImk';

const photoEl = document.getElementById('photo');
const photographerEl = document.getElementById('photographer');
const likeBtn = document.getElementById('likeBtn');
const likeCountEl = document.getElementById('likeCount');

let currentPhotoId = '';
let likeCount = 0;

async function fetchRandomPhoto() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`);
        const data = await response.json();

        currentPhotoId = data.id;
        const photoUrl = data.urls.regular;
        const photographerName = data.user.name;

        photoEl.src = photoUrl;
        photographerEl.textContent = `Фото от: ${photographerName}`;

        const savedLikes = localStorage.getItem(`likes_${currentPhotoId}`);
        likeCount = savedLikes ? parseInt(savedLikes) : 0;
        likeCountEl.textContent = likeCount;
    } catch (error) {
        console.error('Ошибка загрузки фото:', error);
        photographerEl.textContent = 'Ошибка загрузки фото';
    }
}

likeBtn.addEventListener('click', () => {
    likeCount++;
    likeCountEl.textContent = likeCount;
    localStorage.setItem(`likes_${currentPhotoId}`, likeCount);
});

fetchRandomPhoto();
