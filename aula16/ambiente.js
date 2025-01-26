/*
    function Somar(n1=0, n2=0) {
        return n1 + n2
    }

    console.log(Somar(7))

*/

    function fatorialSR(n) {
        let fat = 1
        for (let i = n; i > 1; i--) {
            fat *= i
        }
        return fat
    }

// Recursividade

    function fatorial(n) {
        if (n == 1) {
            return 1
        } else {
            return n * fatorial(n-1)
        }
    }

    console.log(fatorial(5))