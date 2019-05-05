FROM node:6
ADD . /app
WORKDIR /app
RUN npm i
CMD [ "./api-test_node" ]
# start app
#RUN ls
#RUN /bin/sh -c "npm test test/run.js"
