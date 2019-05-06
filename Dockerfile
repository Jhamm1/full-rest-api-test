FROM node:6
ADD . /app
WORKDIR /app
RUN npm i
CMD [ "./full-rest-api-test" ]
# start app
#RUN ls
#RUN /bin/sh -c "npm test test/run.js"
