import mongoose from "mongoose";

const url = process.env.MONGODB;

export const connectToMongoose = async () => {
  try {
    await mongoose
      .connect(url)
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
