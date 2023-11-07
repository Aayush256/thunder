const mongoose = require(`mongoose`);
mongoose
  .connect(
    "mongodb+srv://aayush21:85798579@cluster0.mrnacow.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then((response) => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

