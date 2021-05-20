export function currentUser() {
  return new Promise((resolve) => {
    resolve({
      id: "U123456",
      username: "Takashi",
      email: "sample@email.com",
      password: "Profy1234"
    });
  });
}
