
.PHONY: dev
dev:
	open http://localhost:8081/
	npx concurrently 'cd ./src && python3 -m http.server 8081' 'make css-watch'

.PHONY: build-prod
build-prod:
	NODE_ENV=production npx postcss src/entry.css -o src/dist/styles.css

.PHONY: css-watch
css-watch:
	NODE_ENV=development npx postcss src/entry.css --watch -o src/dist/styles.css

.PHONY: deploy
deploy: build-prod
	node deploy.js
