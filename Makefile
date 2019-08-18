.PHONY: install
install:
	composer install
	yarn install --frozen-lockfile

.PHONY: start
start:
	npx concurrently 'make css-watch' 'docker-compose up --build'

.PHONY: build-prod
build-prod:
	NODE_ENV=production npx postcss challange.org.ru/entry.css -o challange.org.ru/dist/styles.css

.PHONY: css-watch
css-watch:
	NODE_ENV=development npx postcss challange.org.ru/entry.css --watch -o challange.org.ru/dist/styles.css

.PHONY: deploy
deploy: build-prod
	yarn env-cmd ./vendor/bin/deployment deployment.php
