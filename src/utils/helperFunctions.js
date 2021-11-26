export function calculatePercentageChange(currPrice, lastPrice) {
    let result = currPrice - lastPrice
    let percentageResult = (result / lastPrice) * 100
    return percentageResult
}

export function extractPropertiesAsArray(obj) {
    return Object.values(obj)
}
