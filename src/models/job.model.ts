export class Jobs{
  SearchJobs: Job[];
  Status: string;
  Message: string;
}
export class Job {
  JobPostedId: number;
  JobTitle: string;
  JobPostedDate: Date;
  JobDescription: string;
  Salary : string;
  Location: string;
  Skills: string;
  NoOfOpenings: string;
  IsAlreadyApplied: boolean;
}
export class ApplyJob {
  UserId: number;
  JobId: number;
}
export class AddJob {
  UserId: number;
  JobTitle: string;
  JobDescription: string;
  Salary : string;
  Location: string;
  Skills: string;
  NoOfOpening: string;
}
export class AppliedUsers {
  JobPostedId: number;
  JobTitle: string;
  JobDescription: string;
  Salary : string;
  Location: string;
  Skills: string;
  UserId: number;
  FirstName: string;
  LastName: string;
  UserName: string;
}