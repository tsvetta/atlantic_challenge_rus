FROM php:7.2-apache

ENV APACHE_RUN_USER daemon

RUN a2enmod rewrite
RUN docker-php-ext-install pdo_mysql

RUN mkdir -p /var/www/u0678634/data/www/challenge.org.ru
RUN chown daemon /var/www/u0678634/data/www/challenge.org.ru

ENV APACHE_DOCUMENT_ROOT /var/www/u0678634/data/www/challenge.org.ru
WORKDIR /var/www/u0678634/data/www/challenge.org.ru

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf
