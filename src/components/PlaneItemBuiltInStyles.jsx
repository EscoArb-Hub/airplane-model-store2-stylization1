import defaultImage from "./default.png" //! Дефолтне зображення


//! Стилі для текстових полів
const textField = {
    fontSize: '18px',
    fontWeight: 700,
}

//! Стилі для значень текстових полів
const textFieldValue = {
    fontWeight: 400,
    fontStyle: "italic",
}

//! Стилі для заголовків зображень
const imageTitles = {
    textAlign: 'center',
    color: 'blue'
}



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
            <h3
                style={{
                    marginBottom: 12,
                    padding: "12px 16px",
                    fontSize: 32,
                    textAlign: 'center',
                    borderRadius: 8,
                    backgroundColor: "yellow",
                    color: "blue",
                }}
            >
                {nameBrief}
            </h3>
            {/* <img src={urlMain} alt={nameBrief} width="480" /> */}
            <img
                src={urlMain}
                alt={nameBrief}
                onError={(e) => onErrorImg(e)}
            />
            {/* <p>Повна назва: {nameFull}</p> */}
            <p style={textField}>Повна назва: <span style={textFieldValue}>{nameFull}</span></p>
            <p style={textField}>Тип: <span style={textFieldValue}>{infoType}</span></p>
            <p style={textField}>Прізвисько: <span style={textFieldValue}>{nameNickname}</span></p>
            <p style={textField}>Країна виробник: <span style={textFieldValue}>{infoCountry}</span></p>
            <p style={textField}>Рік випуску: <span style={textFieldValue}>{infoYear}</span></p>
            <p style={textField}>Актуальність: <span style={textFieldValue}>{infoYear < 2000 ? "минуле століття" : "сучасний"}</span></p>
            <p style={textField}>Ціна: <span style={textFieldValue}>{infoPrice}</span></p>
            <p style={textField}>Опис: <span style={textFieldValue}>{infoDescription}</span></p>
            <p style={imageTitles}>Рекламна модель:</p>
            <img
                src={urlPromotional}
                alt={nameBrief}
                onError={(e) => onErrorImg(e)}
            />
            <p style={imageTitles}>Реальна модель:</p>
            {/* <img src={urlActual} alt={nameBrief} width="600" /> */}
            <div
                style={{
                    display: "flex",
                    gap: 10,
                    flexWrap: 'wrap',
                    padding: "8px",
                    borderRadius: 8,
                    backgroundColor: "gray",
                }}
            >
                {urlActual.map((image, index) =>
                    <img
                        key={index}
                        src={image}
                        alt={nameBrief}
                        style={{
                            maxWidth: "calc((100% - 10px) / 2)",
                            borderRadius: 4,
                        }}
                    />
                )}
            </div>
            <br />
            <button
                type="button"
                style={{
                    width: "70%",
                    margin: "20px auto",
                    padding: "16px 32px",
                    display: "inline-block",
                    alignItems: "center",
                    fontFamily: 'Franklin Gothic Medium, Arial Narrow',
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    borderRadius: "12px",
                    color: "#ffffff",
                    cursor: "pointer",
                    backgroundColor: "#008080",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.1)",
                    boxShadow: "inset 0 0 16px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.9)",
                }}
            >
                Додати до кошику
                </button>
        </>
    )
};
