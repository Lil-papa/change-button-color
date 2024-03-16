const btn = document.querySelector('.btn');

let index = 0;

const colors = ['#ff414d', '#eab595', '#e76f51', '#70ae6e', '#1aa6b7']

btn.addEventListener('click', () => {
    btn.style.backgroundColor = colors[index];
    btn.style.boxShadow = '0 0 60px white';
    btn.style.transition = '1s ease';

    index = index >= colors.length - 1 ? 0 : index + 1;
});