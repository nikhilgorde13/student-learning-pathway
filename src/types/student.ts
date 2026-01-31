export interface SubjectPerformance {
  tests: number;
  count_eol?: number;
  percentage_eol?: number;

  count_fa?: number;
  percentage_fa?: number;

  count_sa?: number;
  percentage_sa?: number;

  current_score?: number;
  predicted_score?: number;

  descriptive_eol: string;
  prescriptive_eol: string;
}

export type Subjects = {
  [subjectName: string]: SubjectPerformance;
};

export interface Grade {
  subjects: Subjects;
}

export type Grades = {
  [gradeName: string]: Grade;
};

export interface Student {
  username: string;
  grades: Grades;
}
