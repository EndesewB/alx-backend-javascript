namespace Subjects {
  export class Subject {
    private _teacher: Teacher | undefined;

    public setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }
  }
}
