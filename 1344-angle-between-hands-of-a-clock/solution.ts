// Solution: Angle Between Hands of a Clock
// Runtime: 0 ms | Memory: 55 MB

function angleClock(hour: number, minutes: number): number {
    let minuteAngle = 6 * minutes;
    let hourAngle = 30 * hour + 0.5 * minutes

    const diff = Math.abs(hourAngle - minuteAngle);
    return Math.min(diff, 360 - diff)
};