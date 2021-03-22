#!/bin/bash

export $(/.env | xargs) > /dev/null
sed -i -e 's/MYSQL_SECU_PASSWORD/'`echo $MYSQL_SECU_PASSWORD`'/g' /admin.sql
mysql -u root -p`echo $MYSQL_ROOT_PASSWORD` < /admin.sql


GREEN='\033[0;32m'
NC='\033[0m'
echo "Create database hacker ... ${GREEN}done${NC}";
echo "Create user admin ... ${GREEN}done${NC}";
echo "Add grant admin user only for select, insert, update and delete in hacker database ... ${GREEN}done${NC}";