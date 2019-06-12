
.PHONY: static-server
static-server:
	open http://localhost:8081/
	python3 -m http.server 8081

.PHONY: build-prod
build-prod:
	NODE_ENV=production npx postcss entry.css -o dist/styles.css

.PHONY: watch
watch:
	NODE_ENV=development npx postcss entry.css --watch -o dist/styles.css
