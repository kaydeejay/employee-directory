export default {
  findAll: () => {
    return new Promise((res, rej) => {
      fetch("http://localhost:9000/api/findall")
        .then(result => res(result.text()));
    });
  },
  sortByFirst: () => {
    return new Promise((res, rej) => {
      fetch("http://localhost:9000/api/firstname")
        .then(result => res(result.text()));
    });
  },
  sortByLast: () => {
    return new Promise((res, rej) => {
      fetch("http://localhost:9000/api/lastname")
        .then(result => res(result.text()));
    });
  }
}