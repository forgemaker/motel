.PHONY: all

all:
	curl -sS https://getcomposer.org/installer | php
	php composer.phar install
	npm install

admin:
	cd public/admin && npm install
	cd public/admin && ./node_modules/.bin/grunt release

release: admin
	[ -d public/admin/dist ] && rsync -avr --delete public/admin/dist/* /home/www/motel/www/public/admin/