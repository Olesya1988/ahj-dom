// функция игры по клику мышки
export default function getgameclick() {
  const holes = Array.from(document.querySelectorAll('.hole'));

  const luck = document.querySelector('.luck');
  const lost = document.querySelector('.lost');

  let luckCount = 0;
  let lostCount = 0;

  function createMessage(text) {
    const body = document.querySelector('body');
    const message = document.createElement('div');
    message.classList.add('message');
    message.textContent = text;
    body.appendChild(message);

    const close = document.createElement('span');
    close.classList.add('close');
    close.innerHTML = '&times;';
    message.appendChild(close);

    const background = document.createElement('div');
    background.classList.add('background');
    body.appendChild(background);

    document.querySelector('.close').addEventListener('click', function () {
      location.reload();
    })
  }

  holes.forEach((el) => {
    el.addEventListener('click', () => {
      if (el.classList.contains('active-hole')) {
        luckCount++;
        luck.textContent = luckCount;
      } else {
        lostCount++;
        lost.textContent = lostCount;
      }

      if (lostCount === 5) {
        const text = `Вы проиграли. Допущено промахов: ${lostCount}.`;
        createMessage(text);

        lostCount = 0;
        luckCount = 0;
      } else if (luckCount === 10) {
        const text = `Победа! Набрано баллов: ${luckCount}.`;
        createMessage(text);

        lostCount = 0;
        luckCount = 0;
      }
    });
  });
}
