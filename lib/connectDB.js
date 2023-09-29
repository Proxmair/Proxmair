import mongoose from "mongoose";

export const connectDatabase = async () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((c) => {
      console.log(`Mongodb connect to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
export default connectDatabase();