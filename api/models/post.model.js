import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    content: { type: String, require: true },
    title: { type: String, require: true, unique: true },
    imege: {
      type: String,
      default:
        "https://simplybuiltsites.com/wp-content/uploads/how-to-write-a-blog-post.png",
    },
    category: { type: String, default: "uncategorized" },
    slug: { type: String, require: true, unique: true },
  },
  { timestamps: true }
);
const Post = mongoose.model("Post", postSchema);
export default Post;
