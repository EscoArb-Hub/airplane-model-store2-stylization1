// import PlaneItem from "./PlaneItem" //! без стилізації
import PlaneItemBuiltInStyles from "./PlaneItemBuiltInStyles"  //! вбудовані стилі


export default function PlanesList({ items }) {
    console.log("items", items)
    return <ul
        style={{
            marginLeft: 10,
            marginRight: 10,
            padding: 10,
            display: "grid",
            gridTemplateColumns: 'repeat(auto-fit, minmax(445px, 1fr))',
            gap: 32,
            outline: "1px solid red",
        }}
    >
        {items.map((item, index) =>
            <li
                key={item.id}
                style={{
                    display: "grid",
                    gap: 12,
                    padding: 10,
                    backgroundColor: '#ffdb92',
                    outline: "1px solid grey",
                }}
            >
                <PlaneItemBuiltInStyles
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
