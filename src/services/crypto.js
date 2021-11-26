import {
    extractPropertiesAsArray,
    calculatePercentageChange,
} from '../utils/helperFunctions'

export function getCoinsPrices(currency) {
    return fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,ADA,DOT,BCH,XLM,DOGE,BNB,USDT&tsyms=${currency}`
    )
        .then((response) => response.json())
        .then((r) => {
            let arr = extractPropertiesAsArray(r.RAW)
                .flatMap(extractPropertiesAsArray)
                .map((c) => ({
                    coinName: c.FROMSYMBOL,
                    price: c.PRICE,
                    openPrice: c.OPENHOUR,
                    increasePercentage: calculatePercentageChange(
                        c.PRICE,
                        c.OPENHOUR
                    ),
                    increaseRaw: c.PRICE - c.OPENHOUR,
                }))
                .sort((a, b) => b.increasePercentage - a.increasePercentage)

            return arr
        })
}
