export class UserModel {
  UserName: string;
  Password: string;
  UserType: string;
  FirstName: string;
  LastName: string;
  Location: string;
  YOE: number;
}
export class JobsAppliedResponse {
  AppliedUsers : UserDetailsResponse[];
}
export class UserDetailsResponse {
  UserName: string;
  FirstName: string;
  LastName: string;
  Location: string;
  Skills: string;
}