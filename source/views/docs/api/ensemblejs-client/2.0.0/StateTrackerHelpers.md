---
layout: documentation
---

# StateTrackerHelpers `dep`, `{}`, `1`

The `StateTracker` accepts functions for state access and condition evalution. The conditions are often reusable and this module has become a place for them to live.

~~~javascript
return {
  equals: function (expectedValue) {}
};
~~~

Current Predicates:
- equals: returns true if the `expectedValue` matches the current state value. This does a deep equal for hashes.