#!/bin/bash
mvn clean install && \
echo "git rm -r pages && cp -r target/site/* . && mkdir -p images && cp -r target/filtered/images/* images && \git add . && \git commit -m 'Publish processed sources from \"sources\" branch.' && \git checkout sources" > target/finish.sh && \
git checkout master