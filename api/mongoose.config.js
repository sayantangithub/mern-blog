import mongoose from "mongoose";

const url = process.env.MONGODB;

export const connectToMongoose = async () => {
  try {
    mongoose
      .connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("Connected to Mongoose");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};
