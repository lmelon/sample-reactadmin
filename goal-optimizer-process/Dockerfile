FROM keymetrics/pm2:latest-alpine

# copy files
ADD src/ /opt/goal-optimizer-process/build/
ADD *.json /opt/goal-optimizer-process/
ADD ecosystem.config.js /opt/goal-optimizer-process/

# copy config
ADD config/config.docker.js /opt/goal-optimizer-process/config/config.js

# add PM2
WORKDIR /opt/goal-optimizer-process/

# fetch app specific deps
RUN npm install --prod

# admin port
EXPOSE 5010

# non-root user
USER node

#CMD ["pm2-runtime", "start", "/opt/goal-optimizer-process/ecosystem.config.js"]
CMD node build/server.js