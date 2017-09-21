    /**
     * @param {string} s
     * @return {boolean}
     */
    var checkValidString = function (s) {
        String.prototype.replaceAt=function(index, replacement) {
            return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
        }
        var str = s.slice(0,s.length);
        var stack = [];
        var stackIndex = [];

        for(var i = 0 ; i < str.length; i++)
        {
            if(str.charAt(i) == "(" || str.charAt(i) == ")")
            {
                stack.push(str.charAt(i));
                stackIndex.push(i);
            }
            if(stack[stack.length - 1] == ")" && stack[stack.length - 2] == "(")
            {
                s = s.replaceAt(stackIndex[stack.length - 1], "x");
                s = s.replaceAt(stackIndex[stack.length - 2], "x");
                stack.pop();
                stack.pop();
                stackIndex.pop();
                stackIndex.pop();
            }
        }

        var newStack = [];
        for(var i = 0 ; i < s.length; i++)
        {
            if(s.charAt(i) != "x")
            {
                newStack.push(s.charAt(i));
            }
        }
        
        var newerStack = [];
        for(var i = 0 ; i < newStack.length; i++)
        {
            newerStack.push(newStack[i]);
            if(newerStack[newerStack.length - 1] == ")" && newerStack[newerStack.length - 2] == "*")
            {
                newerStack.pop();
                newerStack.pop();
            }
            if(newerStack[newerStack.length - 1] == "*" && newerStack[newerStack.length - 2] == "(")
            {
                newerStack.pop();
                newerStack.pop();
            }
            if(newerStack[newerStack.length - 1] == "*" && newerStack[newerStack.length - 2] == "*")
            {
                newerStack.pop();
                newerStack.pop();
            }
        }

        for(var i = 0 ; i < newerStack.length; i++)
        {
            if(newerStack[i] == "*"){
                newerStack.pop();
            }
        }
        if(newerStack.length != 0)
        {
            return false;
        }
        else{
            return true;
        }
    };