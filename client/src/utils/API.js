export default {
  findAll: () => {
    return new Promise((res, rej) => {
      fetch("http://localhost:9000/testapi")
        .then(result => res(result.text()));
    });
  },
}