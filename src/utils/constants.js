export const GOOGLE_API_KEY = "AIzaSyDvpHI4DKc_5bEyKr1kdPQLoWhbyuACTWg";

export const OFFSET_LIVE_CHAT = 100;

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=" +
  GOOGLE_API_KEY;

export const VIDEO_DETAILS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&type=video&key=" +
  GOOGLE_API_KEY;

export const CHANNEL_DETAILS =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&key=" +
  GOOGLE_API_KEY;
// GET https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id={CHANNEL_ID}&key={API_KEY}

export const YOUTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_AUTOCOMPLETE_API =
  "https://retube-search-autocomplete-proxy-server.onrender.com/search-autocomplete?searchQuery=";

export const SHORTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoDuration=short&key=" +
  GOOGLE_API_KEY +
  "&q=trendingshorts";
