import React, { useState } from "react";
import { FaUser, FaReply, FaThumbsUp } from "react-icons/fa";

function Comments({ projectId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState(null);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment,
      author: "Anonymous", // You can replace this with actual user authentication
      timestamp: new Date().toISOString(),
      likes: 0,
      replies: [],
      isReply: false,
    };

    if (replyTo) {
      setComments(
        comments.map((c) =>
          c.id === replyTo.id
            ? { ...c, replies: [...c.replies, { ...comment, isReply: true }] }
            : c
        )
      );
      setReplyTo(null);
    } else {
      setComments([...comments, comment]);
    }

    setNewComment("");
  };

  const handleReply = (comment) => {
    setReplyTo(comment);
  };

  const handleLike = (commentId) => {
    setComments(
      comments.map((c) =>
        c.id === commentId ? { ...c, likes: c.likes + 1 } : c
      )
    );
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Comments
      </h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <FaUser className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
          <div className="flex-grow">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={
                replyTo ? `Reply to ${replyTo.author}...` : "Add a comment..."
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="3"
            />
            <div className="flex justify-between items-center mt-2">
              {replyTo && (
                <button
                  type="button"
                  onClick={() => setReplyTo(null)}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Cancel Reply
                </button>
              )}
              <button type="submit" className="btn btn-primary">
                {replyTo ? "Reply" : "Comment"}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <FaUser className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {comment.author}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(comment.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleLike(comment.id)}
                      className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <FaThumbsUp className="w-4 h-4" />
                      <span>{comment.likes}</span>
                    </button>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {comment.text}
                  </p>
                  <button
                    onClick={() => handleReply(comment)}
                    className="mt-2 flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <FaReply className="w-4 h-4" />
                    <span>Reply</span>
                  </button>
                </div>

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="ml-12 mt-4 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            <FaUser className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">
                                  {reply.author}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  {new Date(
                                    reply.timestamp
                                  ).toLocaleDateString()}
                                </p>
                              </div>
                              <button
                                onClick={() => handleLike(reply.id)}
                                className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                              >
                                <FaThumbsUp className="w-4 h-4" />
                                <span>{reply.likes}</span>
                              </button>
                            </div>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                              {reply.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
