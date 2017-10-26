/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    var unionFindItems = [];
    var notused = [];
    unionFindItems.push(edges[0]);
    edges.splice(0,1);


    function UnionFindCreate(s) {
        unionFindItems.push(s);
    }

    function UnionFindFind(i) {
        for (var k = 0; k < unionFindItems.length; k++) {
            for (var j = 0; j < unionFindItems[k].length; j++) {
                if (unionFindItems[k][j] == i) {
                    return k;
                }
            }
        }
        return -1;
    }

    function UnionFindUnion(a, b) {
        var temp = unionFindItems[a].concat(unionFindItems[b]);

        if (a > b) {
            unionFindItems.splice(a, 1);
            unionFindItems.splice(b, 1);
        } else {
            unionFindItems.splice(b, 1);
            unionFindItems.splice(a, 1);
        }

        unionFindItems.push(temp);
    }

    while(edges.length > 0) {
        if(UnionFindFind(edges[0][0]) < 0 && UnionFindFind(edges[0][1]) < 0) {
            UnionFindCreate(edges[0]);
            edges.splice(0,1);
        }
        else if (UnionFindFind(edges[0][0]) == UnionFindFind(edges[0][1])) {
            notused.push(edges.splice(0,1));
        }
        else if (UnionFindFind(edges[0][0]) >= 0 && UnionFindFind(edges[0][1]) >= 0) {
            UnionFindUnion(UnionFindFind(edges[0][0]), UnionFindFind(edges[0][1]));
            edges.splice(0,1);
        }
        else if(UnionFindFind(edges[0][0]) >= 0) {
            unionFindItems[UnionFindFind(edges[0][0])].push(edges[0][1]);
            edges.splice(0,1);
        }
        else if (UnionFindFind(edges[0][1]) >= 0) {
            unionFindItems[UnionFindFind(edges[0][1])].push(edges[0][0]);
            edges.splice(0,1);
        }
    }
    return notused[0][notused[0].length -1];
}