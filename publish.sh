#!/bin/bash
mvn clean install && \
echo "cp -r target/site/* . && cp -r target/filtered/images/* . && \git add . && \git commit -m 'Publish processed sources from \"sources\" branch.' && \git checkout sources" > target/finish.sh && \
git checkout master