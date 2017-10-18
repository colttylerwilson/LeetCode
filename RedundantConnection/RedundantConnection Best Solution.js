/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    if (edges === null || edges.length === 0) {
        return [];
    }  
      var union = new Union(1001);
    for (var i = 0; i < edges.length; i++) {
        if (!union.union(edges[i][0], edges[i][1])) {
            return edges[i];
        }
    }
      return [];
  };
  
  function Union (n) {
      this.id = [];
      this.count = n;
      for (var i = 0; i < n; i++) {
          this.id[i] = i;
      }
  }
  
  Union.prototype.find = function(p) {
      while (this.id[p] !== p) {
          this.id[p] = this.id[this.id[p]];
          p = this.id[p];
      }
      return p;
  }
  
  Union.prototype.getCount = function() {
      return this.count;
  }
  
  Union.prototype.union = function(p, q) {
      var pId = this.find(p);
      var qId = this.find(q);
      if (pId === qId) {
          return false;
      }
      this.id[pId] = qId;
      this.count--;
      return true;
  }