
//! Для визначення кольору фону картки в залежності від значення "year"

export function getBgColorBuiltInStyles(year) {
    let color = '#ffdb92'

    if (year >= 1946) {
        color = '#d2fdbd'
    }
    if (year >= 2000) {
        color = '#d6f1ff'
    }
    // console.log("color:", color)
    return color;
}