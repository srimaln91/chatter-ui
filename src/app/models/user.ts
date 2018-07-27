export class User {
  public _id: String;
  public name: {
    fname: String,
    lname: String,
    uname: String
  };
  public email: String;
  public createdDate: any;
  public password: String;
  public authToken: String;
}
