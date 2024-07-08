// use     User.insertMany(users); and  Post.insertMany(posts); with import User from "./models/User.js"; import Post from "./models/Post.js"; import {users, posts} from "./data/index.js";

import User from "./models/User.js"; 
import Post from "./models/Post.js"; 
import {users, posts} from "./data/index.js";
import dotenv from "dotenv";

dotenv.config();

const resetDB = async () => {

    await User.deleteMany({});
    await Post.deleteMany({});
    await User.insertMany(users);
    await Post.insertMany(posts);
    console.log("Database has been reset");
}

mongoose.connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
}).then(() => {
    resetDB();
}).catch((error) => console.log(`${error} did not connect`));


