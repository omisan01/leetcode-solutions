// Solution: Design HashMap
// Runtime: 13 ms | Memory: 59.8 MB

#include <vector>
using namespace std;

class MyHashMap {
private:
    int size;
    vector<vector<pair<int, int>>> buckets;

    int hash(int key) {
        return key % size;
    }

public:
    MyHashMap() {
        size = 1000;
        buckets.resize(size);
    }

    void put(int key, int value) {
        int index = hash(key);
        auto& bucket = buckets[index];

        for (int i = 0; i < bucket.size(); i++) {
            if (bucket[i].first == key) {
                bucket[i].second = value;
                return;
            }
        }

        bucket.push_back({key, value});
    }

    int get(int key) {
        int index = hash(key);
        auto& bucket = buckets[index];

        for (int i = 0; i < bucket.size(); i++) {
            if (bucket[i].first == key) {
                return bucket[i].second;
            }
        }

        return -1;
    }

    void remove(int key) {
        int index = hash(key);
        auto& bucket = buckets[index];

        for (int i = 0; i < bucket.size(); i++) {
            if (bucket[i].first == key) {
                bucket.erase(bucket.begin() + i);
                return;
            }
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap* obj = new MyHashMap();
 * obj->put(key, value);
 * int param_2 = obj->get(key);
 * obj->remove(key);
 */