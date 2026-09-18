// Solution: Debounce
// Runtime: 59 ms | Memory: 53.6 MB

type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let timer = undefined;
    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args)
        } , t )
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */