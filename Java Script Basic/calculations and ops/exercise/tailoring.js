function tailoring(input) {
    let tables = Number(input.shift());
    let length = Number(input.shift());
    let width = Number(input.shift());
    let totallenght = tables * (length + 2 * 0.30) * (width + 2 * 0.30);
    let totalwidth = tables * (length/2) * (length/2);
    let priceUSD = totallenght * 7 + totalwidth * 9;
    let priceBGN = priceUSD * 1.85
    console.log(`${priceUSD.toFixed(2)} USD
${priceBGN.toFixed(2)} BGN`)

    }
    tailoring(['5' , '1.00' , '0.50'])