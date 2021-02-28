all: 

clean:
	rm -rf node_modules

deps:
	yarn

build: deps
	npm run build

