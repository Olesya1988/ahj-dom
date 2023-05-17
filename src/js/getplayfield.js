// функция отрисовки игрового поля
export default function gameconstructor() {
  const card = document.querySelector('.card');

  const statistic = document.createElement('div');
  card.appendChild(statistic);
  statistic.classList.add('statistic');
  statistic.innerHTML = 'Попаданий: <span class="luck">0</span><br>Промахов: <span class="lost">0</span><br>';

  const holeList = document.createElement('div');
  card.appendChild(holeList);
  holeList.classList.add('hole-list');

  const hole1 = document.createElement('div');
  hole1.classList.add('hole');
  hole1.classList.add('active-hole');
  holeList.appendChild(hole1);

  const hole2 = document.createElement('div');
  hole2.classList.add('hole');
  holeList.appendChild(hole2);

  const hole3 = document.createElement('div');
  hole3.classList.add('hole');
  holeList.appendChild(hole3);

  const hole4 = document.createElement('div');
  hole4.classList.add('hole');
  holeList.appendChild(hole4);

  const hole5 = document.createElement('div');
  hole5.classList.add('hole');
  holeList.appendChild(hole5);

  const hole6 = document.createElement('div');
  hole6.classList.add('hole');
  holeList.appendChild(hole6);

  const hole7 = document.createElement('div');
  hole7.classList.add('hole');
  holeList.appendChild(hole7);

  const hole8 = document.createElement('div');
  hole8.classList.add('hole');
  holeList.appendChild(hole8);

  const hole9 = document.createElement('div');
  hole9.classList.add('hole');
  holeList.appendChild(hole9);

  const hole10 = document.createElement('div');
  hole10.classList.add('hole');
  holeList.appendChild(hole10);

  const hole11 = document.createElement('div');
  hole11.classList.add('hole');
  holeList.appendChild(hole11);

  const hole12 = document.createElement('div');
  hole12.classList.add('hole');
  holeList.appendChild(hole12);

  const hole13 = document.createElement('div');
  hole13.classList.add('hole');
  holeList.appendChild(hole13);

  const hole14 = document.createElement('div');
  hole14.classList.add('hole');
  holeList.appendChild(hole14);

  const hole15 = document.createElement('div');
  hole15.classList.add('hole');
  holeList.appendChild(hole15);

  const hole16 = document.createElement('div');
  hole16.classList.add('hole');
  holeList.appendChild(hole16);
}
