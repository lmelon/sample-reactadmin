FROM keymetrics/pm2:latest-alpine

# copy our application code
ADD ecosystem.config.js /opt/goal-optimizer/

# copy client files
ADD build /opt/goal-optimizer/gui/

# admin port
EXPOSE 5000

# add PM2
WORKDIR /opt/goal-optimizer/

# non-root user
USER node

CMD ["pm2-runtime", "start", "/opt/goal-optimizer/ecosystem.config.js"]