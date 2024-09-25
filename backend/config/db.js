import mongoose from "mongoose";


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`db connected succfully`);
  } catch (e) {
    console.error(`error,${e}`);
    process.exit(1);
  }
};


 export default connectDB;