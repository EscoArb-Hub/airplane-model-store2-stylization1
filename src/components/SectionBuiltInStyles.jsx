export default function Section({ title, children }) {
    return (
        <section>
            <h2
                style={{
                    marginBottom: 24,
                    fontSize: '48px',
                    textAlign: 'center',
                    color: "darkred",
                }}
            >
                {title}
            </h2>
            {children}
        </section>
    )
}