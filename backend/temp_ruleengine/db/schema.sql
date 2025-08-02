
CREATE TABLE offers (
    id SERIAL PRIMARY KEY,
    upload_date TIMESTAMP DEFAULT NOW(),
    is_anonymized BOOLEAN DEFAULT TRUE,
    region_id INTEGER,
    anonymized_metadata JSONB
);

CREATE TABLE positions (
    id SERIAL PRIMARY KEY,
    offer_id INTEGER REFERENCES offers(id),
    gewerk_id INTEGER,
    einheit TEXT,
    menge NUMERIC,
    gesamtpreis NUMERIC
);

CREATE TABLE rules (
    rule_id TEXT PRIMARY KEY,
    gewerk_id INTEGER,
    einheit TEXT,
    alert_threshold NUMERIC,
    max_threshold NUMERIC,
    message TEXT
);

CREATE TABLE price_benchmarks (
    gewerk_id INTEGER,
    region_id INTEGER,
    art TEXT,
    unterer_preis NUMERIC,
    oberer_preis NUMERIC
);
