.PHONY: all

all:
	curl -sS https://getcomposer.org/installer | php
	php composer.phar install
	npm install