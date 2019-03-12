export const formatNumber = (value, oldValue) => {
    const result = value
        .replace(/[^\d\\.,]/g, '')
        .replace(',', '.');
    const resultMatch = result.match(/(^(\d{0,3})([\\.])?\d{0,2}$)/i);
    return resultMatch ? resultMatch[3] ? resultMatch[1] : resultMatch[2] : oldValue
};

// Correct percent from server
export const correctPercent = list => (list.map(item => item.Percent)
    .reduce((result, item) => result + item, 0) === 100 || list.length === 1 ?
    list :
    list.map((item, index) => ({Name: item.Name, Percent: index === 0 ? 100 : 0})))
    .map(item => ({Name: item.Name, Percent: item.Percent, String: item.Percent.toString()}));


export const normalizationPercent = (list, index) => {

    // Find min and max value
    let maxValue = 0;
    let minValue = 100;


    list.forEach((item, thisIndex) => {
        if (thisIndex !== index) {
            if (item.Percent <= minValue) {
                minValue = item.Percent
            }
            if (item.Percent > maxValue) {
                maxValue = item.Percent
            }
        }
    });

    // Calculation delta
    const delta = 100 - list.map(item => item.Percent).reduce((result, item) => (result + item), 0);

    // Set new value
    return list.map((item, thisIndex) => {
        if (thisIndex !== index && item.Percent === (delta > 0 ? minValue : maxValue)) {
            const value = Math.floor((item.Percent + delta) * 100) / 100;
            return {Name: item.Name, Percent: value || 0, String: value? value.toString() : '0'}
        } else {
            return item
        }

    });
};