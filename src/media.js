import React, { useState } from "react";

const MediaUpload = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ name: "", description: "", image: null });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPost({ ...newPost, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.name && newPost.description && newPost.image) {
      setPosts([...posts, newPost]);
      setNewPost({ name: "", description: "", image: null });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Partagez votre plat</h2>
      <form onSubmit={handlePostSubmit} className="bg-white p-4 shadow-lg rounded-lg">
        <input
          type="text"
          placeholder="Votre prénom"
          value={newPost.name}
          onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          placeholder="Description du plat"
          value={newPost.description}
          onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        ></textarea>
        <input type="file" accept="image/*" onChange={handleImageChange} className="mb-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Publier
        </button>
      </form>

      <div className="mt-6 space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="font-bold text-lg">{post.name}</h3>
            <p className="text-gray-700 mb-2">{post.description}</p>
            {post.image && (
              <img
                src={post.image}
                alt="Plat"
                className="w-full h-48 object-cover rounded cursor-pointer"
                onClick={() => setSelectedImage(post.image)}
              />
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-lg">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <img src={selectedImage} alt="Agrandissement" className="max-w-full max-h-screen rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaUpload;
