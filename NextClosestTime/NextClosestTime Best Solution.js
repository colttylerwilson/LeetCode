/**
     * @param {string} time
     * @return {string}
     */
    var nextClosestTime = function (time) {
        var A = time.charAt(0);
        var B = time.charAt(1);
        var C = time.charAt(3);
        var D = time.charAt(4);

        var digits = [];
        digits.push(A);
        digits.push(B);
        digits.push(C);
        digits.push(D);

        //AB:CD
        //A [0] B[0-9] C[0-5] D[0-9]
        //A [1] B[0-9] C[0-5] D[0-9]
        //A [2] B[0-3] C[0-5] D[0-9]

        digits.sort();
        // Check D
        for (let i = 0; i < digits.length; i++) {
            if (digits[i] > D) {
                return A + B + ":" + C + digits[i];
            }
        }

        // Check C
        for (let i = 0; i < digits.length; i++) {
            if (digits[i] < "6") {
                if (digits[i] > C) {
                    return A + B + ":" + digits[i] + digits[0];
                }
            } else {
                break;
            }
        }

        // Check B
        for (let i = 0; i < digits.length; i++) {
            if (A <= "1" || digits[i] < "4") {
                if (digits[i] > B) {
                    return A + digits[i] + ":" + digits[0] + digits[0];
                }
            } else {
                break;
            }
        }

        // Check A
        for (let i = 0; i < digits.length; i++) {
            if (digits[i] < 3) {
                if (digits[i] > A) {
                    return digits[i] + digits[0] + ":" + digits[0] + digits[0];
                } else {
                    break;
                }
            }
        }

        return digits[0] + digits[0] + ":" + digits[0] + digits[0];
    };