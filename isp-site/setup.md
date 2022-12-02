# setup
yarn create react-app isp-site
cd isp-site
yarn add gh-pages

in packages.json the following commands to "scripts":
```
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build",
```

