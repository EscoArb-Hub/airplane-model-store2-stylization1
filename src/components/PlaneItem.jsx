import defaultImage from "./default.png" //! Дефолтне зображення


//! Підстановка дефолтного зображення якщо url є, але шлях помилковий (від Антона)
function onErrorImg(e) {
    e.target.onError = null;
    e.target.src = defaultImage;
};

export default function PlaneItem({
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
            <h3>{nameBrief}</h3>
            {/* <img src={urlMain} alt={nameBrief} width="480" /> */}
            <img src={urlMain} alt={nameBrief} width="480" onError={(e) => onErrorImg(e)} />
            <p>Повна назва: {nameFull}</p>
            <p>Тип: {infoType}</p>
            <p>Прізвисько: {nameNickname}</p>
            <p>Країна виробник: {infoCountry}</p>
            <p>Рік випуску: {infoYear}</p>
            <p>Актуальність: {infoYear < 2000 ? "минуле століття" : "сучасний"}</p>
            <p>Ціна: {infoPrice}</p>
            <p>Опис: {infoDescription}</p>
            <p>Рекламна модель:</p>
            <img src={urlPromotional} alt={nameBrief} width="300" onError={(e) => onErrorImg(e)} />
            <p></p>
            {/* <img src={urlActual} alt={nameBrief} width="600" /> */}
            {urlActual.map((image) =>
                <img src={image} alt={nameBrief} width="300" />
            )}
            <br />
            <button type="button">Додати до кошику</button>
        </>
    )
};
