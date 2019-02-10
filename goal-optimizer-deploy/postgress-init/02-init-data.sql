--
-- PostgreSQL database dump
--

-- Dumped from database version 11.1 (Debian 11.1-3.pgdg90+1)
-- Dumped by pg_dump version 11.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: event_log; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.event_log (id, schema_name, table_name, trigger_id, trigger_name, payload, delivered, error, tries, created_at, locked, next_retry_at) FROM stdin;
\.


--
-- Data for Name: event_invocation_logs; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.event_invocation_logs (id, event_id, status, request, response, created_at) FROM stdin;
\.


--
-- Data for Name: event_triggers; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.event_triggers (id, name, type, schema_name, table_name, configuration, comment) FROM stdin;
\.


--
-- Data for Name: hdb_function; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.hdb_function (function_schema, function_name, is_system_defined) FROM stdin;
\.


--
-- Data for Name: hdb_table; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.hdb_table (table_schema, table_name, is_system_defined) FROM stdin;
hdb_catalog	hdb_table	t
information_schema	tables	t
information_schema	schemata	t
information_schema	views	t
hdb_catalog	hdb_primary_key	t
information_schema	columns	t
hdb_catalog	hdb_foreign_key_constraint	t
hdb_catalog	hdb_relationship	t
hdb_catalog	hdb_permission_agg	t
hdb_catalog	hdb_check_constraint	t
hdb_catalog	hdb_unique_constraint	t
hdb_catalog	hdb_query_template	t
hdb_catalog	event_triggers	t
hdb_catalog	event_log	t
hdb_catalog	event_invocation_logs	t
hdb_catalog	remote_schemas	t
public	users	f
public	companies	f
public	files	f
public	assets	f
public	goals	f
hdb_catalog	hdb_function_agg	t
hdb_catalog	hdb_function	t
hdb_catalog	hdb_version	t
\.


--
-- Data for Name: hdb_permission; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) FROM stdin;
public	companies	user	select	{"filter": {}, "columns": ["id", "name", "website"], "allow_aggregations": false}	\N	f
public	assets	user	select	{"filter": {}, "columns": ["id", "file_id", "name", "description", "amount", "recurrence"], "allow_aggregations": false}	\N	f
public	goals	user	select	{"filter": {}, "columns": ["id", "name", "amount", "from", "to", "recurrence", "file_id", "priority", "type"], "allow_aggregations": false}	\N	f
public	users	user	delete	{"filter": {"_user_id": {"_eq": "X-HASURA-USER-ID"}}}	\N	f
public	users	user	update	{"filter": {"_user_id": {"_eq": "X-HASURA-USER-ID"}}, "columns": ["_user_id", "company_id", "email", "id", "name", "phone", "website"]}	\N	f
public	users	user	select	{"filter": {}, "columns": ["company_id", "email", "id", "name", "phone", "website"], "allow_aggregations": true}	\N	f
public	users	user	insert	{"set": {"_user_id": "x-hasura-User-Id"}, "check": {}, "columns": ["id", "name", "email", "phone", "website", "company_id", "_user_id"]}	\N	f
public	files	user	select	{"filter": {}, "columns": ["age", "amount", "currency", "domicile", "horizon", "id", "name", "status"], "allow_aggregations": false}	\N	f
\.


--
-- Data for Name: hdb_query_template; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.hdb_query_template (template_name, template_defn, comment, is_system_defined) FROM stdin;
\.


--
-- Data for Name: hdb_relationship; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) FROM stdin;
hdb_catalog	hdb_table	detail	object	{"manual_configuration": {"remote_table": {"name": "tables", "schema": "information_schema"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}	\N	t
hdb_catalog	hdb_table	primary_key	object	{"manual_configuration": {"remote_table": {"name": "hdb_primary_key", "schema": "hdb_catalog"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}	\N	t
hdb_catalog	hdb_table	columns	array	{"manual_configuration": {"remote_table": {"name": "columns", "schema": "information_schema"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}	\N	t
hdb_catalog	hdb_table	foreign_key_constraints	array	{"manual_configuration": {"remote_table": {"name": "hdb_foreign_key_constraint", "schema": "hdb_catalog"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}	\N	t
hdb_catalog	hdb_table	relationships	array	{"manual_configuration": {"remote_table": {"name": "hdb_relationship", "schema": "hdb_catalog"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}	\N	t
hdb_catalog	hdb_table	permissions	array	{"manual_configuration": {"remote_table": {"name": "hdb_permission_agg", "schema": "hdb_catalog"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}	\N	t
hdb_catalog	hdb_table	check_constraints	array	{"manual_configuration": {"remote_table": {"name": "hdb_check_constraint", "schema": "hdb_catalog"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}	\N	t
hdb_catalog	hdb_table	unique_constraints	array	{"manual_configuration": {"remote_table": {"name": "hdb_unique_constraint", "schema": "hdb_catalog"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}	\N	t
hdb_catalog	event_log	trigger	object	{"manual_configuration": {"remote_table": {"name": "event_triggers", "schema": "hdb_catalog"}, "column_mapping": {"trigger_id": "id"}}}	\N	t
hdb_catalog	event_triggers	events	array	{"manual_configuration": {"remote_table": {"name": "event_log", "schema": "hdb_catalog"}, "column_mapping": {"id": "trigger_id"}}}	\N	t
hdb_catalog	event_invocation_logs	event	object	{"foreign_key_constraint_on": "event_id"}	\N	t
hdb_catalog	event_log	logs	array	{"foreign_key_constraint_on": {"table": {"name": "event_invocation_logs", "schema": "hdb_catalog"}, "column": "event_id"}}	\N	t
public	users	company	object	{"foreign_key_constraint_on": "company_id"}	\N	f
public	companies	userssBycompanyId	array	{"foreign_key_constraint_on": {"table": "users", "column": "company_id"}}	\N	f
public	goals	file	object	{"foreign_key_constraint_on": "file_id"}	\N	f
public	files	goals	array	{"foreign_key_constraint_on": {"table": "goals", "column": "file_id"}}	\N	f
public	assets	file	object	{"foreign_key_constraint_on": "file_id"}	\N	f
public	files	assets	array	{"foreign_key_constraint_on": {"table": "assets", "column": "file_id"}}	\N	f
hdb_catalog	hdb_function_agg	return_table_info	object	{"manual_configuration": {"remote_table": {"name": "hdb_table", "schema": "hdb_catalog"}, "column_mapping": {"return_type_name": "table_name", "return_type_schema": "table_schema"}}}	\N	t
\.


--
-- Data for Name: hdb_version; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.hdb_version (version, upgraded_on, hasura_uuid, cli_state, console_state) FROM stdin;
9	2019-02-10 17:56:24.571521+00	31dd2bd0-3ded-48c3-a155-45b2185ce41f	{}	{"telemetryNotificationShown": true}
\.


--
-- Data for Name: remote_schemas; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.remote_schemas (id, name, definition, comment) FROM stdin;
\.


--
-- Data for Name: files; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.files (id, name, domicile, horizon, amount, currency, age, status) FROM stdin;
\.


--
-- Data for Name: assets; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.assets (id, file_id, name, description, amount, recurrence) FROM stdin;
\.


--
-- Data for Name: companies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.companies (id, name, website) FROM stdin;
5	Avengers	\N
6	Disney	\N
\.


--
-- Data for Name: goals; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.goals (id, name, amount, "from", "to", recurrence, file_id, priority, type) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, phone, website, company_id, _user_id, age) FROM stdin;
22	Tony Stark	\N	\N	\N	5	1	\N
20	Mickey Mouse	\N	\N	\N	6	1	\N
21	Mary Poppins	\N	\N	\N	6	1	\N
\.


--
-- Name: remote_schemas_id_seq; Type: SEQUENCE SET; Schema: hdb_catalog; Owner: postgres
--

SELECT pg_catalog.setval('hdb_catalog.remote_schemas_id_seq', 1, false);


--
-- Name: assets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.assets_id_seq', 8, true);


--
-- Name: companies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.companies_id_seq', 6, true);


--
-- Name: files_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.files_id_seq', 4, true);


--
-- Name: goals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.goals_id_seq', 20, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 22, true);


--
-- PostgreSQL database dump complete
--

