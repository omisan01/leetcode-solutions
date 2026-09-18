// Solution: Sleep
// Runtime: 37 ms | Memory: 53.6 MB

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, millis)
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */