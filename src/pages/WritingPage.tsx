import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
// types are imported where needed; no local Writing type usage here
import { posts } from "../writing/posts";

export function WritingPage() {

  const location = useLocation();
  const navigate = useNavigate();

  // Extract slug from /writing/slug pathname
  const activeSlug = React.useMemo(() => {
    const pathname = location.pathname;
    if (pathname === "/writing" || pathname === "/writing/") return null;

    // Extract slug from /writing/slug
    const match = pathname.match(/^\/writing\/(.+)$/);
    return match ? match[1] : null;
  }, [location.pathname]);

  const activePost = React.useMemo(
    () => posts.find((p) => p.slug === activeSlug) ?? null,
    [posts, activeSlug]
  );

  const handlePostClick = React.useCallback(
    (slug: string) => {
      navigate(`/writing/${slug}`);
    },
    [navigate]
  );

  const handleBackClick = React.useCallback(() => {
    navigate("/writing");
  }, [navigate]);

  if (activePost) {
    return (
      <section className="writing" aria-label="Writing post">
        <button
          type="button"
          className="writingBack"
          onClick={handleBackClick}
        >
          ← Back to writing
        </button>

        <header className="postHeader">
          <h3 className="postH1">{activePost.title}</h3>
          {activePost.date ? <div className="postMeta">{activePost.date}</div> : null}
        </header>

        <article className="postBody">{activePost.content}</article>
      </section>
    );
  }

  return (
    <section className="writing" aria-label="Writing posts">
      <h3>Some thoughts ...</h3>

      <ul className="postList">
        {posts.map((post) => (
          <li key={post.slug} className="postItem">
            <button
              type="button"
              className="postCard"
              onClick={() => handlePostClick(post.slug)}
              aria-label={`Open post: ${post.title}`}
            >
              <div className="postTitleRow">
                <span className="postTitle">{post.title} | </span>
                {post.date ? <span className="postDate">{post.date}</span> : null}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
