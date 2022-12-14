export function AllStudents() {
  return fetch("http://hp-api.herokuapp.com/api/characters/students").then(
    (response) => response.json()
  );
}

export function Dormitory(type) {
  return fetch(`http://hp-api.herokuapp.com/api/characters/house/${type}`).then(
    (response) => response.json()
  );
}
