"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BinaryBackground } from '@/components/BinaryBackground';
import { FloatingBinary } from '@/components/FloatingBinary';

interface NewsItem {
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
  image?: string;
}

interface NewsResponse {
  success: boolean;
  data: NewsItem[];
  count: number;
  lastUpdated: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/news');
      const data: NewsResponse = await response.json();
      
      if (data.success) {
        setNews(data.data);
      } else {
        setError('Failed to fetch news');
      }
    } catch (err) {
      setError('Failed to fetch news');
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredNews = news;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return 'Yesterday';
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getSourceColor = (source: string) => {
    if (source.includes('Microsoft')) return 'bg-blue-100 text-blue-800';
    if (source.includes('Community')) return 'bg-green-100 text-green-800';
    return 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Power Platform news...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Header Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <BinaryBackground intensity="high" speed="medium" className="text-white opacity-30" />
        <FloatingBinary intensity="high" speed="medium" color="text-white opacity-40" />
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Power Platform News
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Stay updated with the latest Power Platform developments, updates, and insights from Microsoft and the community.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Error Display */}
      {error && (
        <motion.div 
          className="max-w-6xl mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          </div>
        </motion.div>
      )}

      {/* News Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16 pb-16">
        {filteredNews.length === 0 ? (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-500 text-lg">
              No news available at the moment.
            </div>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image */}
                {item.image && (
                  <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                )}
                
                {/* Content */}
                <div className="p-6">
                  {/* Source and Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSourceColor(item.source)}`}>
                      {item.source}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatDate(item.publishedAt)}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  {/* Read More Link */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors"
                  >
                    Read Full Article
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Info */}
      <motion.div 
        className="max-w-6xl mx-auto px-4 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="bg-white rounded-xl shadow-lg p-6 text-center relative overflow-hidden">
          <BinaryBackground intensity="low" speed="slow" className="text-indigo-300" />
          <FloatingBinary intensity="low" speed="slow" color="text-indigo-200" />
          <div className="relative z-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            About This News Feed
          </h3>
          <p className="text-gray-600 text-sm">
            This news feed aggregates Power Platform related content from Microsoft&apos;s official blog, 
            community forums, and other trusted sources. News is updated daily to keep you informed 
            about the latest developments in Power Apps, Power Automate, Power BI, and Power Virtual Agents.
          </p>
        </div>
      </div>
    </motion.div>
    </div>
  );
}
