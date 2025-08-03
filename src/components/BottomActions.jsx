import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { exportAnalyticsData, backupAnalyticsData } from '../utils/analytics';

const BottomActions = () => {
  const { darkMode } = useContext(ThemeContext);
  const [likes, setLikes] = useState(0);
  const [visitors, setVisitors] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  // Admin panel toggle (Ctrl+Shift+A)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setShowAdminPanel(!showAdminPanel);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAdminPanel]);

  // Function to save visitor data to JSON file
  const saveVisitorData = () => {
    const timestamp = new Date().toISOString();
    const visitorData = {
      timestamp,
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer || 'Direct',
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language
    };

    // In a real application, you would send this to a server
    // For now, we'll save it to localStorage and log it
    const existingData = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
    existingData.push(visitorData);
    localStorage.setItem('portfolio_analytics', JSON.stringify(existingData));
    
    console.log('Visitor data saved:', visitorData);
  };

  // Function to save like data
  const saveLikeData = (action) => {
    const timestamp = new Date().toISOString();
    const likeData = {
      timestamp,
      action, // 'like' or 'unlike'
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Save to localStorage
    const existingLikes = JSON.parse(localStorage.getItem('portfolio_likes_data') || '[]');
    existingLikes.push(likeData);
    localStorage.setItem('portfolio_likes_data', JSON.stringify(existingLikes));
    
    console.log('Like data saved:', likeData);
  };

  useEffect(() => {
    // Load data from localStorage
    const storedLikes = localStorage.getItem('portfolio_likes');
    const storedVisitors = localStorage.getItem('portfolio_visitors');
    const storedHasLiked = localStorage.getItem('portfolio_has_liked');
    const storedVisitorTracked = localStorage.getItem('portfolio_visitor_tracked');

    // Reset counters to zero
    setLikes(0);
    setVisitors(0);
    localStorage.setItem('portfolio_likes', '0');
    localStorage.setItem('portfolio_visitors', '0');

    // Check if user has already liked
    setHasLiked(storedHasLiked === 'true');

    // Track visitor (only once per session)
    if (!storedVisitorTracked) {
      const newVisitorCount = 1;
      setVisitors(newVisitorCount);
      localStorage.setItem('portfolio_visitors', newVisitorCount.toString());
      localStorage.setItem('portfolio_visitor_tracked', 'true');
      
      // Save visitor data to JSON file
      saveVisitorData();
      
      // Backup analytics data periodically
      backupAnalyticsData();
    }
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem('portfolio_likes', newLikes.toString());
      localStorage.setItem('portfolio_has_liked', 'true');
      
      // Save like action to analytics
      saveLikeData('like');
    } else {
      // Allow unlikes but don't show the count going down
      setHasLiked(false);
      localStorage.setItem('portfolio_has_liked', 'false');
      
      // Save unlike action to analytics (but don't decrease visible count)
      saveLikeData('unlike');
    }
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    if (!feedbackMessage.trim()) return;

    setIsSubmitting(true);

    // Create mailto link with the feedback
    const subject = encodeURIComponent('Portfolio Feedback');
    const body = encodeURIComponent(`Feedback from Portfolio Visitor:\n\n${feedbackMessage}\n\nSent from: ${window.location.href}`);
    const mailtoLink = `mailto:abhikumar3584@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Reset form after a delay
    setTimeout(() => {
      setFeedbackMessage('');
      setShowFeedback(false);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="mb-6">
      {/* Admin Panel - Hidden by default */}
      {showAdminPanel && (
        <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded-2xl">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200">Admin Panel</h3>
            <button
              onClick={() => setShowAdminPanel(false)}
              className="text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={exportAnalyticsData}
              className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
            >
              Export Analytics
            </button>
            <button
              onClick={backupAnalyticsData}
              className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors"
            >
              Backup Data
            </button>
            <div className="text-sm text-yellow-700 dark:text-yellow-300">
              Press Ctrl+Shift+A to toggle admin panel
            </div>
          </div>
        </div>
      )}

      {/* Bottom Actions Bar */}
      <div className={`bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-3xl p-4 shadow-md`}>
        <div className="flex flex-row justify-between items-center gap-2 md:gap-4">
          
          {/* Like Button */}
          <div className="flex items-center gap-1 md:gap-2">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-full transition-all duration-300 text-xs md:text-sm ${
                hasLiked
                  ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900 hover:text-red-600 dark:hover:text-red-400 cursor-pointer'
              }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 md:h-5 md:w-5 transition-all duration-300 ${hasLiked ? 'fill-current text-red-600 dark:text-red-400' : 'stroke-current fill-none'}`}
                viewBox="0 0 24 24" 
                stroke="currentColor"
                fill={hasLiked ? "currentColor" : "none"}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="font-medium">{likes}</span>
              <span className="hidden md:inline">{hasLiked ? 'Liked!' : 'Like'}</span>
            </button>
          </div>

          {/* Visitor Counter */}
          <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="font-medium">{visitors.toLocaleString()}</span>
            <span className="hidden md:inline">Visitors</span>
          </div>

          {/* Feedback Button */}
          <div className="relative">
            <button
              onClick={() => setShowFeedback(!showFeedback)}
              className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-all duration-300 text-xs md:text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-medium hidden md:inline">Feedback</span>
            </button>

            {/* Feedback Modal */}
            {showFeedback && (
              <div className="absolute bottom-full right-0 mb-2 w-72 md:w-80 max-w-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-xl p-4 z-50">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm md:text-base">Send Feedback</h3>
                  <button
                    onClick={() => setShowFeedback(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <form onSubmit={handleFeedbackSubmit}>
                  <textarea
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                    placeholder="Share your thoughts about my portfolio..."
                    className="w-full h-20 md:h-24 p-3 text-sm border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    required
                  />
                  <div className="flex justify-end mt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting || !feedbackMessage.trim()}
                      className="px-3 md:px-4 py-2 text-sm bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Send
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomActions;
