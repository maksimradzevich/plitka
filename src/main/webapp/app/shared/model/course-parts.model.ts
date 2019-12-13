export interface ICourseParts {
  id?: number;
  npart?: number;
  downloadLink?: string;
  downloadDescription?: string;
  testName?: string;
  testQuestionCount?: number;
}

export class CourseParts implements ICourseParts {
  constructor(
    public id?: number,
    public npart?: number,
    public downloadLink?: string,
    public downloadDescription?: string,
    public testName?: string,
    public testQuestionCount?: number
  ) {}
}
