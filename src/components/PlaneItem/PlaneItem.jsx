import defaultImage from "./default.png" //! Дефолтне зображення

import { iconSize } from "@/constants/iconSize.js"

// import { SiAnimalplanet } from "react-icons/si";
// /! Бібліотека react-icons
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'; //! Приклад react-icons
import { AiOutlineFlag, AiOutlineInfoCircle, AiOutlineClockCircle, AiOutlineDollarCircle } from "react-icons/ai";
import { GiArmoredBoomerang, GiCeremonialMask, GiAirplaneDeparture, GiCommercialAirplane, GiCurlyMask, GiTimeSynchronization } from "react-icons/gi";
import { CiBadgeDollar, CiGlobe, CiAirportSign1 } from "react-icons/ci";
import { TbClockHour4Filled } from "react-icons/tb";
import { FcTrademark } from "react-icons/fc";
//? nameBrief
//? nameFull - <FcTrademark /> - Повна назва
//? type - <GiArmoredBoomerang /> - бумеранг, <GiCommercialAirplane /> - літак- Тип
//? nickname - <GiCeremonialMask /> маска1, <GiCurlyMask /> маска2  - Прізвисько
//? country - <AiOutlineFlag /> - прапор, <CiGlobe /> - глобус - Країна виробник
//? year - <AiOutlineClockCircle /> - годинник - Рік випуску
//? duration - <TbClockHour4Filled /> - годинник - Тривалість виробництва(в роках)
//? price - <CiBadgeDollar/> - $, <AiOutlineDollarCircle /> - $ - Ціна
//? description - <AiOutlineInfoCircle /> - info - Опис
//? <GiAirplaneDeparture /> - Рекламна модель
//? <CiAirportSign1 /> - Реальна модель


import css from "./PlaneItem.module.css"; //! CSS-модулі

console.log("iconSixe:", iconSize)
// iconSize.xs = 56 
//! Стилі для текстових полів
// const textField = {
//     fontSize: '18px',
//     fontWeight: 700,
// }

//! Стилі для значень текстових полів
// const textFieldValue = {
//     fontWeight: 400,
//     fontStyle: "italic",
// }

//! Стилі для заголовків зображень
// const imageTitles = {
//     textAlign: 'center',
//     color: 'blue'
// }



//! Підстановка дефолтного зображення якщо url є, але шлях помилковий (від Антона)
function onErrorImg(e) {
    e.target.onError = null;
    e.target.src = defaultImage;
};

export function PlaneItem({
    nameBrief,
    urlMain = defaultImage,
    nameFull,
    infoType,
    nameNickname,
    infoCountry,
    infoYear,
    infoPrice,
    infoDescription,
    urlPromotional,
    urlActual
}) {
    return (
        <>
            <h3
                // style={{
                //     marginBottom: 12,
                //     padding: "12px 16px",
                //     fontSize: 32,
                //     textAlign: 'center',
                //     borderRadius: 8,
                //     backgroundColor: "yellow",
                //     color: "blue",
                // }}
                className={css.titleItem}
            >
                {/* <SiAnimalplanet
                    size={60}
                    color="red"
                /> */}
                {nameBrief}
            </h3>
            {/* <img src={urlMain} alt={nameBrief} width="480" /> */}
            <img
                src={urlMain}
                alt={nameBrief}
                onError={(e) => onErrorImg(e)}
            />
            {/* <p>Повна назва: {nameFull}</p> */}
            <p
                // style={textField}
                className={css.textField}
            >
                <FcTrademark size={iconSize.md} className={css.icon} />
                Повна назва: <span
                    className={css.textFieldValue}
                >
                    {nameFull}</span></p>
            <p className={css.textField}><GiCommercialAirplane size={28} className={css.icon} /> Тип: <span className={css.textFieldValue}>{infoType}</span></p>
            <p className={css.textField}><GiCurlyMask size={28} className={css.icon} />Прізвисько: <span className={css.textFieldValue}>{nameNickname}</span></p>
            <p className={css.textField}><CiGlobe size={28} className={css.icon} />Країна виробник: <span className={css.textFieldValue}>{infoCountry}</span></p>
            <p className={css.textField}><AiOutlineClockCircle size={28} className={css.icon} />Рік випуску: <span className={css.textFieldValue}>{infoYear}</span></p>
            <p className={css.textField}><GiTimeSynchronization size={28} className={css.icon} />Актуальність: <span className={css.textFieldValue}>{infoYear < 2000 ? "минуле століття" : "сучасний"}</span></p>
            <p className={css.textField}><AiOutlineDollarCircle size={28} className={css.icon} />Ціна: <span className={css.textFieldValue}>{infoPrice}</span></p>
            <p className={css.textField}><AiOutlineInfoCircle size={28} className={css.icon} />Опис: <span className={css.textFieldValue}>{infoDescription}</span></p>
            <p className={css.imageTitles}><GiAirplaneDeparture size={28} className={css.icon} />Рекламна модель:</p>
            <img
                src={urlPromotional}
                alt={nameBrief}
                onError={(e) => onErrorImg(e)}
            />
            <p className={css.imageTitles}><CiAirportSign1 size={28} className={css.icon} />Реальна модель:</p>
            {/* <img src={urlActual} alt={nameBrief} width="600" /> */}
            <div
                // style={{
                //     display: "flex",
                //     gap: 10,
                //     flexWrap: 'wrap',
                //     padding: "8px",
                //     borderRadius: 8,
                //     backgroundColor: "gray",
                // }}
                className={css.actualImageBox}
            >
                {urlActual.map((image, index) =>
                    <img
                        key={index}
                        src={image}
                        alt={nameBrief}
                        // style={{
                        //     maxWidth: "calc((100% - 10px) / 2)",
                        //     borderRadius: 4,
                        // }}
                        className={css.actualImage}
                    />
                )}
            </div>
            <br />
            <button
                type="button"
                // style={{
                //     width: "70%",
                //     margin: "20px auto",
                //     padding: "16px 32px",
                //     display: "inline-block",
                //     alignItems: "center",
                //     fontFamily: 'Franklin Gothic Medium, Arial Narrow',
                //     fontWeight: 700,
                //     fontSize: "1.5rem",
                //     borderRadius: "12px",
                //     color: "#ffffff",
                //     cursor: "pointer",
                //     backgroundColor: "#008080",
                //     textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.1)",
                //     boxShadow: "inset 0 0 16px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.9)",
                // }}
                className={css.planeButton}
            >
                Додати до кошику
            </button>
        </>
    )
};
