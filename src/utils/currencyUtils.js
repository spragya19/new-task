export const formatCurrency = (no) => {
    return (no).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export const convertToUsd = (amount) => {
    return formatCurrency(amount * 82.63)   // @82.63 dollar value to be fetchefd from api
}