#!/bin/bash

export $(/.env | xargs) > /dev/null
sed -i -e 's/!i5W27+Fs/'`echo $!i5W27+FsD`'/g' /setup.sql
mysql -u root -p`echo $MYSQL_ROOT_PASSWORD` < /setup.sql


GREEN='\033[0;32m'
NC='\033[0m'
echo "Create database hacker ... ${GREEN}done${NC}";
echo "Create user admin ... ${GREEN}done${NC}";
echo "Add grant admin user only for select, insert, update and delete in hacker database ... ${GREEN}done${NC}";