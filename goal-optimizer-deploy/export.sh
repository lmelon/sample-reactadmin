#!/bin/bash

pg_dump --port 54321 --host localhost -U postgres -s > postgress-init/01-init-schema.sql
pg_dump --port 54321 --host localhost -U postgres -a > postgress-init/02-init-data.sql
