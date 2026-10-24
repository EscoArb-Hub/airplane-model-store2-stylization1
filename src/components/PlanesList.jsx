import PlaneItem from "./PlaneItem"


export default function PlanesList({ items }) {
    console.log("items", items)
    return <ul>
        {items.map((item, index) =>
            <li key={item.id} >
                <PlaneItem
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
