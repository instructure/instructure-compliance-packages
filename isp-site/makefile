VER=$(shell date +%s)

all: jq git

jq:
	jq '.version = "$(VER)"' package.json | sponge package.json

git:
	git add .
	git commit -m "deploying version $(VER)"
	git push
