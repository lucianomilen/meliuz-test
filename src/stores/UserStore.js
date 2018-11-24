export default class UserStore {
  verifyAccess = (email, password) => {
    return email === "studio@moob.com" && password === "123456";
  };
}
