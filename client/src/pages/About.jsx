import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About Sayantan's Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Sayantan's Blog! This blog was created by Sayantan as a
              personal project to share his thoughts and ideas with the world.
              Sayantan is a passionate developer who loves writing about
              technology, coding, and everything in between.
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. Sayantan is always learning and exploring new
              technologies, so be sure to check back often for fresh content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a strong community of learners helps
              everyone grow and improve. Happy reading!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
