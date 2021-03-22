FROM mariadb:latest
COPY /.env /
COPY ./mariadb/admin.sql /
COPY ./mariadb/setup.sh /
RUN chmod +x /setup.sh