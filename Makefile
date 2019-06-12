
.PHONY: static-server
static-server:
	open http://localhost:8081/
	python3 -m http.server 8081
