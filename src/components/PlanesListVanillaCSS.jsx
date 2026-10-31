// import PlaneItem from "./PlaneItem" //! без стилізації
// import PlaneItemBuiltInStyles from "./PlaneItemBuiltInStyles.jsx"  //! вбудовані стилі
import PlaneItemVanillaCSS from "./PlaneItemVanillaCSS.jsx"

import { getBgColorBuiltInStyles } from "../utils/getBackgroundColor.js"

// backgroundColor: '#ffdb92', // "year" до 1946
// backgroundColor: '#d2fdbd', // "year"  1946 - 1999
// backgroundColor: '#d6f1ff', // "year" від 2000

//! Для визначення кольору фону картки в залежності від значення "year"
// function getBgColorBuiltInStyles(year) {
//     // let color = '#ffdb92'
//     let color = 'grey'
//     // Тут повинна бути логіка умови 5-6 рядки
//     if (year < 1946) {
//         color = '#ffdb92'
//     }
//     if (year >= 1946) {
//         color = '#d2fdbd'
//     }
//     if (year >= 2000) {
//         color = '#d6f1ff'
//     }
//     console.log("color:", color)
//     return color;
// }
// const result = getBgColorBuiltInStyles(1945)
// console.log("result:", result)
// console.log("getBgColorBuiltInStyles:", getBgColorBuiltInStyles)
// console.log("getBgColorBuiltInStyles(1945):", getBgColorBuiltInStyles(1945))

//! Для визначення кольору фону картки в залежності від значення "year" - ванільний CSS
function getBgColorVanillaCSS(year) {
    let className = "planeItem"
    // className = className + " last"
    // className = className + " current"


    if (year >= 1946) {
        className = className + " last"
    }
    if (year >= 2000) {
        className = className + " current"
    }
    console.log("className:", className)
    return className
}



export default function PlanesList({ items }) {
    console.log("items", items)
    return <ul
        // style={{
        //     marginLeft: 10,
        //     marginRight: 10,
        //     padding: 10,
        //     display: "grid",
        //     gridTemplateColumns: 'repeat(auto-fit, minmax(445px, 1fr))',
        //     gap: 32,
        //     outline: "1px solid red",
        // }}
        className="planesList"
    >
        {items.map((item, index) =>
            <li
                key={item.id}
                // style={{
                //     display: "grid",
                //     gap: 12,
                //     padding: 10,
                //     // backgroundColor: '#ffdb92',
                //     backgroundColor: getBgColorBuiltInStyles(item.info.year),
                //     outline: "1px solid grey",
                // }}
                // className="planeItem last current"
                // className={"planeItem last current"}
                className={getBgColorVanillaCSS(item.info.year)}
            >
                <PlaneItemVanillaCSS
                    nameBrief={item.name.brief}
                    urlMain={item.url.main}
                    nameFull={item.name.full}
                    infoType={item.info.type}
                    nameNickname={item.name.nickname}
                    infoCountry={item.info.country}
                    infoYear={item.info.year}
                    infoPrice={item.info.price}
                    infoDescription={item.info.description}
                    urlPromotional={item.url.promotional}
                    urlActual={item.url.actual}
                />
            </li>
        )}
    </ul>
};
