export default function MandateSummary({ fields = [], note }) {
  return (
    <section className="ht-mandate-summary" aria-label="Mandate summary">
      <div className="container">
        <div className="ht-mandate-summary__grid">
          {fields.map((f) => (
            <div className="ht-mandate-summary__cell" key={f.label}>
              {f.icon && (
                <span className="ht-mandate-summary__icon" aria-hidden="true">
                  <img src={f.icon} alt="" />
                </span>
              )}
              <span className="ht-mandate-summary__label">{f.label}</span>
              <span className="ht-mandate-summary__value">{f.value}</span>
            </div>
          ))}
        </div>
        {note && <p className="ht-mandate-summary__note">{note}</p>}
      </div>
    </section>
  );
}
