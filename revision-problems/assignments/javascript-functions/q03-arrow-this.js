const user = {
  name: "Aditya",
  showName: () => console.log(this.name), // Arrow functions capture outer `this`.
  showNameFixed() { console.log(this.name); }, // Method syntax binds `this` to user.
};
user.showName();
user.showNameFixed();
