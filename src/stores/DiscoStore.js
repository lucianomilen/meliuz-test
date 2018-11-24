export default class DiscoStore {
  verifyAccess = (email, password) => {
    return email === "studio@moob.com" && password === "123456";
  };
}
