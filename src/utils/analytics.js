// Analytics utility functions for portfolio

export const exportAnalyticsData = () => {
  try {
    // Get all analytics data from localStorage
    const visitorData = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
    const likeData = JSON.parse(localStorage.getItem('portfolio_likes_data') || '[]');
    
    const analyticsReport = {
      exportDate: new Date().toISOString(),
      summary: {
        totalVisitors: visitorData.length,
        totalLikes: likeData.filter(item => item.action === 'like').length,
        totalUnlikes: likeData.filter(item => item.action === 'unlike').length,
        netLikes: likeData.filter(item => item.action === 'like').length - likeData.filter(item => item.action === 'unlike').length
      },
      visitors: visitorData,
      likes: likeData
    };

    // Create downloadable JSON file
    const dataStr = JSON.stringify(analyticsReport, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `portfolio-analytics-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
    
    return analyticsReport;
  } catch (error) {
    console.error('Error exporting analytics data:', error);
    return null;
  }
};

export const getAnalyticsSummary = () => {
  try {
    const visitorData = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
    const likeData = JSON.parse(localStorage.getItem('portfolio_likes_data') || '[]');
    
    return {
      totalVisitors: visitorData.length,
      totalLikes: likeData.filter(item => item.action === 'like').length,
      totalUnlikes: likeData.filter(item => item.action === 'unlike').length,
      netLikes: likeData.filter(item => item.action === 'like').length - likeData.filter(item => item.action === 'unlike').length,
      recentVisitors: visitorData.slice(-10), // Last 10 visitors
      recentLikes: likeData.slice(-10) // Last 10 like/unlike actions
    };
  } catch (error) {
    console.error('Error getting analytics summary:', error);
    return null;
  }
};

export const clearAnalyticsData = () => {
  if (confirm('Are you sure you want to clear all analytics data? This action cannot be undone.')) {
    localStorage.removeItem('portfolio_analytics');
    localStorage.removeItem('portfolio_likes_data');
    localStorage.removeItem('portfolio_likes');
    localStorage.removeItem('portfolio_visitors');
    localStorage.removeItem('portfolio_has_liked');
    localStorage.removeItem('portfolio_visitor_tracked');
    
    console.log('All analytics data cleared');
    return true;
  }
  return false;
};

// Function to automatically backup data (can be called periodically)
export const backupAnalyticsData = () => {
  try {
    const analyticsData = getAnalyticsSummary();
    if (analyticsData) {
      // Save backup to a different localStorage key with timestamp
      const backupKey = `portfolio_backup_${Date.now()}`;
      localStorage.setItem(backupKey, JSON.stringify({
        timestamp: new Date().toISOString(),
        data: analyticsData
      }));
      
      // Keep only last 5 backups
      const allKeys = Object.keys(localStorage);
      const backupKeys = allKeys.filter(key => key.startsWith('portfolio_backup_'))
        .sort()
        .slice(0, -5); // Remove all but last 5
      
      backupKeys.forEach(key => localStorage.removeItem(key));
      
      console.log('Analytics data backed up');
      return true;
    }
  } catch (error) {
    console.error('Error backing up analytics data:', error);
    return false;
  }
};
