export default function getrandomhole() {
  const holes = Array.from(document.querySelectorAll('.hole'));
  let activeHole;
  let activeHoleNew;
  function nextHole() {
    activeHole = document.querySelector('.active-hole');
    activeHole.classList.remove('active-hole');
    let randomIndex = Math.floor(1 + Math.random() * (holes.length - 1));

    if (holes.indexOf(activeHole) === randomIndex) {
      randomIndex = Math.floor(1 + Math.random() * (holes.length - 1));
    }

    activeHoleNew = holes[randomIndex];
    activeHoleNew.classList.add('active-hole');
  }

  const next = setInterval(() => nextHole(), 800);

  if (document.querySelector('.background') != null) {
    clearInterval(next);
  }
}
