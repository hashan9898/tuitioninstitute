export interface Student {
  name: string;
  email: string;
  password: string;
  mobileNumber?: number;
  subject: Subject;
}

export enum Subject {
  BIOLOGY = 'Biology',
  MATHS = 'Maths',
  COMMERCE = 'Commerce',
  ART = 'Art'
}
