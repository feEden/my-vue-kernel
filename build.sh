#! /bin/bash

hasCommandByType(){
    if type $1 2>/dev/null
    then
        return 1
    else
        return -1
    fi
}
hasCommandByType cross-env
returnVue=$?

if [ $returnVue == -1 ]
then
    `sudo npm install cross-env -g`
fi

hasCommandByType gulp
let returnVue=$?

if [ $returnVue == -1 ]
then
    `sudo npm install gulp -g`
fi

hasCommandByType webpack-cli
let returnVue=$?
if [ $returnVue == -1 ]
then
    `sudo npm install webpack-cli -g`
fi

npm install
npm run deploy:test
npm run client:build
npm run server:build