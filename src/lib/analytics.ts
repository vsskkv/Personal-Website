// Analytics utility functions
interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface PageViewData {
  page_title: string;
  page_location: string;
  page_path: string;
}

// Google Analytics 4 tracking
export const gtag = {
  // Track page views
  pageview: (data: PageViewData) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
        page_title: data.page_title,
        page_location: data.page_location,
        page_path: data.page_path,
      });
    }
  },

  // Track custom events
  event: ({ action, category, label, value }: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  },
};

// Custom analytics functions for your portfolio
export const analytics = {
  // Track form submissions
  trackFormSubmission: (formType: string, success: boolean = true) => {
    gtag.event({
      action: success ? 'form_submit_success' : 'form_submit_error',
      category: 'engagement',
      label: formType,
    });

    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 Analytics: Form submission - ${formType} - ${success ? 'Success' : 'Error'}`);
    }
  },

  // Track project views
  trackProjectView: (projectSlug: string) => {
    gtag.event({
      action: 'view_project',
      category: 'content',
      label: projectSlug,
    });

    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 Analytics: Project viewed - ${projectSlug}`);
    }
  },

  // Track blog post views
  trackBlogView: (postSlug: string) => {
    gtag.event({
      action: 'view_blog_post',
      category: 'content',
      label: postSlug,
    });

    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 Analytics: Blog post viewed - ${postSlug}`);
    }
  },

  // Track contact button clicks
  trackContactClick: (source: string) => {
    gtag.event({
      action: 'contact_click',
      category: 'engagement',
      label: source, // 'floating_button', 'nav_link', 'hero_cta', etc.
    });

    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 Analytics: Contact clicked from - ${source}`);
    }
  },

  // Track external link clicks
  trackExternalLink: (url: string, linkText: string) => {
    gtag.event({
      action: 'click_external_link',
      category: 'engagement',
      label: `${linkText} -> ${url}`,
    });

    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 Analytics: External link clicked - ${url}`);
    }
  },

  // Track scroll depth
  trackScrollDepth: (percentage: number) => {
    gtag.event({
      action: 'scroll_depth',
      category: 'engagement',
      label: `${percentage}%`,
      value: percentage,
    });
  },

  // Track time on page
  trackTimeOnPage: (seconds: number, page: string) => {
    gtag.event({
      action: 'time_on_page',
      category: 'engagement',
      label: page,
      value: seconds,
    });
  },
};

// Hook for tracking page views in Next.js
export const usePageTracking = () => {
  if (typeof window !== 'undefined') {
    const trackPageView = () => {
      gtag.pageview({
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    };

    return trackPageView;
  }
  return () => {};
};

// Scroll depth tracking hook
export const useScrollTracking = () => {
  if (typeof window !== 'undefined') {
    let maxScroll = 0;
    const milestones = [25, 50, 75, 90, 100];
    const tracked = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track milestones
        milestones.forEach(milestone => {
          if (scrollPercent >= milestone && !tracked.has(milestone)) {
            tracked.add(milestone);
            analytics.trackScrollDepth(milestone);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
  return () => {};
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}