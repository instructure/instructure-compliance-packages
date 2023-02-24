VER=$(shell date +%s)

all: jq git gh-pages

jq:
	jq '.version = "$(VER)"' package.json | sponge package.json

git:
	git add .
	git commit -m "deploying version $(VER)"
	git push

gh-pages:
	gh-pages -atx -d build
	git pull -q
