class Lecturer {
  constructor() {
    this.students = new Set();
    this.results = new Map(); 
  }
  subscribe(student) { this.students.add(student); }
  unsubscribe(student) { this.students.delete(student); }
  setResults(resultsObj) { this.results = new Map(Object.entries(resultsObj || {})); }
  announceResults() {
    for (const s of this.students) {
      const grade = this.results.get(s.name);
      s.update(grade);
    }
  }
}

class Student {
  constructor(name) {
    this.name = name;
  }
  update(grade) {
    if (grade == null) {
      console.log(`${this.name}: brak wyniku.`);
    } else {
      console.log(`${this.name}: wynik = ${grade}`);
    }
  }
}

const lecturer = new Lecturer();
const s1 = new Student('Ala');
const s2 = new Student('Bartek');
const s3 = new Student('Patryk');

lecturer.subscribe(s1);
lecturer.subscribe(s2);
lecturer.subscribe(s3);

lecturer.setResults({ Ala: 5, Bartek: 4 });
lecturer.announceResults();

lecturer.setResults({ Ala: 5, Bartek: 4, Patryk: 5 });
lecturer.announceResults();