#!/bin/bash
mvn clean install && \
echo "cp -r target/site/* . && \git add . && \git commit -m 'Publish processed sources from \"sources\" branch.' && \git checkout sources" > target/finish.sh && \
git checkout master