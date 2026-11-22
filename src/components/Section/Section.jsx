import css from "./Section.module.css"; //! CSS-модулі
console.log("css:", css)


export function Section({ title, children }) {
    return (
        <section>
            {/* //! CSS-модулі з композицією класів */}
            {/* {title && <h2 className={`${css.title} ${css.lugrasimoBold}`}>{title}</h2>} */}
            {/* //! CSS-модулі з composes */}
            {title && <h2 className={css.titleLugrasimoBold}>{title}</h2>}
            {children}
        </section>
    )
}