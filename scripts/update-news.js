#!/usr/bin/env node

/**
 * News Update Script
 * This script helps update the Power Platform news feed
 * Run with: node scripts/update-news.js
 */

const axios = require('axios');
const cheerio = require('cheerio');

// Sources to scrape
const sources = [
  {
    name: 'Microsoft Power Platform Blog',
    url: 'https://powerplatform.microsoft.com/en-us/blog/',
    selectors: {
      articles: 'article, .blog-post, .post, .entry',
      title: 'h1, h2, h3, .title',
      description: 'p, .excerpt, .summary',
      link: 'a',
      date: 'time, .date, .published-date'
    }
  },
  {
    name: 'Power Platform Community',
    url: 'https://powerusers.microsoft.com/t5/Power-Platform-Community/ct-p/Power_Platform_Community',
    selectors: {
      articles: '.lia-message-body, .discussion',
      title: 'h1, h2, h3, .subject',
      description: 'p, .excerpt',
      link: 'a',
      date: 'time, .date'
    }
  }
];

async function scrapeNews() {
  const newsItems = [];
  
  for (const source of sources) {
    try {
      console.log(`Scraping ${source.name}...`);
      
      const response = await axios.get(source.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        timeout: 10000
      });
      
      const $ = cheerio.load(response.data);
      
      $(source.selectors.articles).each((index, element) => {
        if (index < 3) { // Limit to 3 articles per source
          const $el = $(element);
          const title = $el.find(source.selectors.title).first().text().trim();
          const description = $el.find(source.selectors.description).first().text().trim();
          const link = $el.find(source.selectors.link).first().attr('href');
          const date = $el.find(source.selectors.date).first().text().trim();
          
          if (title && description && link) {
            newsItems.push({
              title,
              description: description.length > 200 ? description.substring(0, 200) + '...' : description,
              url: link.startsWith('http') ? link : `${new URL(source.url).origin}${link}`,
              source: source.name,
              publishedAt: date || new Date().toISOString(),
              image: $el.find('img').first().attr('src')
            });
          }
        }
      });
      
      console.log(`✓ Found ${newsItems.length} articles from ${source.name}`);
      
    } catch (error) {
      console.error(`✗ Failed to scrape ${source.name}:`, error.message);
    }
  }
  
  return newsItems;
}

async function main() {
  console.log('🔍 Starting Power Platform news scraping...\n');
  
  const newsItems = await scrapeNews();
  
  console.log('\n📊 Results:');
  console.log(`Total articles found: ${newsItems.length}`);
  
  if (newsItems.length > 0) {
    console.log('\n📰 Latest articles:');
    newsItems.slice(0, 5).forEach((item, index) => {
      console.log(`${index + 1}. ${item.title}`);
      console.log(`   Source: ${item.source}`);
      console.log(`   URL: ${item.url}`);
      console.log('');
    });
  }
  
  console.log('✅ News scraping completed!');
  console.log('\n💡 Tip: The API route will automatically use this data when available.');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { scrapeNews };

