import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setPosts(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchPosts();
  }, [page]);

  useEffect(() => {
    setFiltered(posts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    ));
  }, [search, posts]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Posts</h2>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 px-4 py-2 border rounded w-full"
      />

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(post => (
          <div key={post.id} className="bg-white p-4 rounded shadow border">
            <h3 className="font-bold text-lg mb-2">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center space-x-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(prev => prev - 1)}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">{page}</span>
        <button
          onClick={() => setPage(prev => prev + 1)}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Posts;
