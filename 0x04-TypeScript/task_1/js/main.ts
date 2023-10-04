// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow for additional dynamic attributes
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create a director1 object using the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);

// Define the printTeacher function
function printTeacher(firstName: string, lastName: string): string {
  const initial = firstName.charAt(0).toUpperCase();
  const fullName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${initial}. ${fullName}`;
}

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Example usage
const teacherName: string = printTeacher("John", "Doe");
console.log(teacherName); // Output: "J. Doe"

// Define the interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

// Define the interface for the Student class
interface Student {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClass implements Student {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Output: "Currently working"
console.log(student.displayName()); // Output: "John"
