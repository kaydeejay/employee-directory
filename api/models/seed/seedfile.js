var mongoose = require('mongoose');

require('../all-models').toContext(global);


//------------------------
// ADD SEEDS BELOW
//------------------------

Employee.create([
  {
    firstName: "Kevin",
    lastName: "Jones",
    img: "../../public/images/kevin-image.png"
  },
  {
    firstName: "Nyan",
    lastName: "Cat",
    img: "../../public/images/nyan-cat.png"
  }
])
  .then(() => {
    console.log("Seed complete!")
    mongoose.connection.close();
  });

// be sure to close the connection once the queries are done

