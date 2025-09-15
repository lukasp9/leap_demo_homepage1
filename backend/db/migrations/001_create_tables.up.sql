CREATE TABLE financial_products (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  subcategory TEXT NOT NULL,
  provider TEXT NOT NULL,
  price DOUBLE PRECISION,
  features JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE inquiries (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  category TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO financial_products (name, description, category, subcategory, provider, price, features) VALUES
('Povinné ručení Premium', 'Základní povinné ručení s rozšířeným krytím', 'pojisteni', 'auto', 'Allianz', 3500, '{"coverage": "10M CZK", "bonus": "65%"}'),
('Životní pojištění Komfort', 'Univerzální životní pojištění', 'pojisteni', 'zivot', 'Kooperativa', 2800, '{"sum": "1M CZK", "investment": true}'),
('Domácnost Standard', 'Pojištění domácnosti a odpovědnosti', 'pojisteni', 'majetek', 'ČSOB Pojišťovna', 4200, '{"coverage": "500K CZK", "theft": true}'),
('Cestovní pojištění Svět', 'Celosvětové cestovní pojištění', 'pojisteni', 'cestovni', 'Generali', 890, '{"medical": "2M CZK", "luggage": true}'),
('Pojištění psa', 'Zdravotní pojištění pro domácí mazlíčky', 'pojisteni', 'mazlicek', 'Direct', 1200, '{"vet": "50K CZK", "operation": true}'),

('Hypotéka Standard', 'Klasická hypotéka na bydlení', 'uvery', 'hypoteky', 'Česká spořitelna', 0, '{"rate": "4.5%", "ltv": "90%"}'),
('Osobní úvěr Express', 'Rychlý úvěr na cokoliv', 'uvery', 'cokoliv', 'Air Bank', 0, '{"rate": "8.9%", "amount": "500K CZK"}'),
('Konsolidace Plus', 'Sjednocení všech úvěrů', 'uvery', 'konsolidace', 'Moneta', 0, '{"rate": "7.2%", "period": "10 let"}'),
('Podnikatelský úvěr', 'Úvěr pro malé a střední podniky', 'uvery', 'podnikatelske', 'Komerční banka', 0, '{"rate": "6.8%", "amount": "5M CZK"}'),

('Penzijní fond Konzervativní', 'Bezpečná penzijní strategie', 'investice', 'penzijko', 'NN', 0, '{"yield": "3.2%", "risk": "low"}'),
('Akciový fond Evropa', 'Investice do evropských akcií', 'investice', 'podilove', 'Pioneer', 0, '{"yield": "8.5%", "risk": "high"}'),
('Nemovitostní fond Praha', 'Investice do pražských nemovitostí', 'investice', 'nemovitostni', 'J&T', 0, '{"yield": "6.1%", "risk": "medium"}');
