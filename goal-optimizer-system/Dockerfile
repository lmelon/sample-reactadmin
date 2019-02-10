FROM keymetrics/pm2:latest-alpine

# copy files
ADD src/ /opt/goal-optimizer-api/build/
ADD *.json /opt/goal-optimizer-api/
ADD ecosystem.config.js /opt/goal-optimizer-api/

# copy config
ADD config/config.docker.js /opt/goal-optimizer-api/config/config.js

# add PM2
WORKDIR /opt/goal-optimizer-api/

# fetch app specific deps
RUN npm install --prod

# admin port
EXPOSE 5001

# non-root user
USER node

#CMD ["pm2-runtime", "start", "/opt/goal-optimizer-api/ecosystem.config.js"]
CMD node build/server.js