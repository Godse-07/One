class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Stores key-value pairs, maintaining insertion order
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1; // Or null, or throw an error
    }

    const value = this.cache.get(key);
    this.cache.delete(key); // Remove to re-insert and update recency
    this.cache.set(key, value); // Re-insert at the end (most recent)
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key); // Remove existing to update and move to most recent
    } else if (this.cache.size >= this.capacity) {
      // Cache is full, remove the least recently used (first entry)
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value); // Add or update at the end (most recent)
  }
}

// Usage example
const lruCache = new LRUCache(3);
lruCache.put(1, 'a');
lruCache.put(2, 'b');
lruCache.put(3, 'c');
console.log(lruCache.get(1)); // Access 1, making it most recent
lruCache.put(4, 'd'); // Cache is full, '2' (b) is evicted
console.log(lruCache.get(2)); // Returns -1 (not found)
