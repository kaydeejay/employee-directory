export default {
  searchTerms: () => {
    return new Promise((res, rej) => {
      fetch("http://localhost:9000/testAPI")
        .then(result => res(result.text()));
    });
  },

  testFunc: function () {
    console.log("test");
  }
}