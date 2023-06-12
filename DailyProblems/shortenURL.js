// Good morning! Here's your coding interview problem for today.

// This problem was asked by Microsoft.

// Implement a URL shortener with the following methods:

// shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
// restore(short), which expands the shortened string into the original url.
//  If no such shortened string exists, return null.
// Hint: What if we enter the same URL twice?

class URLShortener {
  constructor() {
    this.keys = new Map();
  }

  generateURL() {
    const randomString = Math.random().toString(36).slice(2, 8);
    console.log({ randomString })
    return randomString;
  }

  shorten(url) {
    // shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
    let shortenedUrl = this.generateURL();
    while (this.keys.has(shortenedUrl)) {
      shortenedUrl = this.generateURL();
    }

    this.keys.set(shortenedUrl, url);
    console.log('keys', this.keys);

    // test restore
    console.log('restore', this.restore(shortenedUrl));
  }

  restore(short) {
    // restore(short), which expands the shortened string into the original url.
    //  If no such shortened string exists, return null.
    const url = this.keys.get(short);
    if (!url) return null;

    return url;
  }
}

// Hint: What if we enter the same URL twice?
// Return the same url if it already exists in map


// Solution:
// { url: 6char }

const s = new URLShortener();
s.shorten('https://www.alejandrochang.com');
// s.restore('exefk3')