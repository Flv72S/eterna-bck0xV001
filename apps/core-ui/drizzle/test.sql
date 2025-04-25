-- Test 1: Verifica delle sezioni inserite
SELECT COUNT(*) as total_sections FROM eterna_sections;

-- Test 2: Verifica dei dettagli di ogni sezione
SELECT nome, slug, stato, ordine FROM eterna_sections ORDER BY ordine;

-- Test 3: Verifica della struttura della tabella users
\d users;

-- Test 4: Verifica della struttura della tabella users_pro
\d users_pro;

-- Test 5: Verifica dei vincoli di chiave esterna
SELECT
    tc.table_name, kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name
FROM
    information_schema.table_constraints AS tc
    JOIN information_schema.key_column_usage AS kcu
      ON tc.constraint_name = kcu.constraint_name
      AND tc.table_schema = kcu.table_schema
    JOIN information_schema.constraint_column_usage AS ccu
      ON ccu.constraint_name = tc.constraint_name
      AND ccu.table_schema = tc.table_schema
WHERE tc.constraint_type = 'FOREIGN KEY'; 