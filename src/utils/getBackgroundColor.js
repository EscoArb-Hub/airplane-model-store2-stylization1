//! Для визначення кольору фону картки в залежності від значення "year"
import clsx from "clsx";


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
//todo: var.1.0 - без використання бібліотеки clsx
// export function getBgColorVanillaCSS(year) {
//     let className = "planeItem"
//     // className = className + " last"
//     // className = className + " current"


//     if (year >= 1946) {
//         className = className + " last"
//     }
//     if (year >= 2000) {
//         className = className + " current"
//     }
//     console.log("className:", className)
//     return className
// }

//todo: var.1.1 - використання бібліотеки clsx
export function getBgColorVanillaCSS(year) {
    const classNames = clsx(
        "planeItem",
        year > 1945 && "last",
        year > 1999 && "current",
    );
    console.log("classNames:", classNames); //!
    return classNames;
};

//todo: var.1.2 - CSS module
export function getBgColorCSSModule(year) {
    let className = "planeItem";
    if (year >= 1946) {
        className = "planeItemLast"
        }
        if (year >= 2000) {
            className = "planeItemCurrent"
        }

    console.log("className:", className); //!
    return className
};