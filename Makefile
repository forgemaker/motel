.PHONY: all

all:
	@echo '==== Welcome Motel Project ===='
	@echo
	@echo 'initial project: make init'
	@echo
	@echo 'build project: make admin'
	@echo
	@echo 'deploy project: make release'
	@echo

init:
	curl -sS https://getcomposer.org/installer | php
	php composer.phar install
	npm install

admin:
	cd public/admin && npm install
	cd public/admin && ./node_modules/.bin/grunt handlebars
	cd public/admin && ./node_modules/.bin/grunt release

release: admin
	[ -d public/admin/dist ] && rsync -avr --delete public/admin/dist/* /home/www/motel/www/public/admin/