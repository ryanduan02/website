import React from "react";
import type { Writing } from "../types/writing";

export function WritingPage() {
  const posts: Writing[] = [
    /*
    {
      slug: "example-post",
      title: "Example Post Title",
      summary:
        "A short 1–2 sentence summary describing what the reader will get out of this piece.",
      date: "2025-12-01",
      content: (
        <>
          <p>
            This is the full post content. It renders on your website, not an
            external link.
          </p>
          <h4>A section header</h4>
          <p>
            Write more paragraphs here. You can include <strong>bold</strong>,
            lists, links, etc.
          </p>
        </>
      ),
    },
    */
  ];

  const [activeSlug, setActiveSlug] = React.useState<string | null>(null);

  const activePost = React.useMemo(
    () => posts.find((p) => p.slug === activeSlug) ?? null,
    [posts, activeSlug]
  );

  if (activePost) {
    return (
      <section className="writing" aria-label="Writing post">
        <button
          type="button"
          className="writingBack"
          onClick={() => setActiveSlug(null)}
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
              onClick={() => setActiveSlug(post.slug)}
              aria-label={`Open post: ${post.title}`}
            >
              <div className="postTitleRow">
                <span className="postTitle">{post.title}</span>
                {post.date ? <span className="postDate">{post.date}</span> : null}
              </div>
              <p className="postSummary">{post.summary}</p>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
