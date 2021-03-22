FROM mariadb:10.4
COPY /.env /
COPY ./mariadb/setup.sql /
COPY ./mariadb/setup.sh /
RUN chmod +x /setup.sh