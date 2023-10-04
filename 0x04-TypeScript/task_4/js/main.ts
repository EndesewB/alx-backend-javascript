import { Subjects } from './subjects';

// Create and export constants for Subjects
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create and export a cTeacher object
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Set the teacher for the Cpp subject
cpp.setTeacher(cTeacher);

// Log and call methods for Cpp subject
console.log('Cpp:');
console.log(cpp.getRequirements()); // Get Cpp requirements
console.log(cpp.getAvailableTeacher()); // Get available teacher for Cpp

// Set the teacher for the Java subject
java.setTeacher(cTeacher);

// Log and call methods for Java subject
console.log('\nJava:');
console.log(java.getRequirements()); // Get Java requirements
console.log(java.getAvailableTeacher()); // Get available teacher for Java

// Set the teacher for the React subject
react.setTeacher(cTeacher);

// Log and call methods for React subject
console.log('\nReact:');
console.log(react.getRequirements()); // Get React requirements
console.log(react.getAvailableTeacher());
