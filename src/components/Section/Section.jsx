import css from "./Section.module.css"; //! CSS-модулі
console.log("css:", css)
export function Section({ title, children }) {
    return (
        <section>
            <h2
                // style={{
                //     marginBottom: 24,
                //     fontSize: '48px',
                //     textAlign: 'center',
                //     color: "darkred",
                // }}

                // className="title"
                className={css.title}
            >
                {title}
            </h2>
            {children}
        </section>
    )
}