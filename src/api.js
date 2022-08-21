export function AllStudents() {
  return fetch("http://hp-api.herokuapp.com/api/characters/students").then(
    (response) => response.json()
  );
}
