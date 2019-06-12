
.PHONY: dev
dev:
	open http://localhost:8081/
	npx concurrently 'python3 -m http.server 8081' 'make css-watch'

.PHONY: build-prod
build-prod:
	NODE_ENV=production npx postcss entry.css -o dist/styles.css

.PHONY: css-watch
css-watch:
	NODE_ENV=development npx postcss entry.css --watch -o dist/styles.css
