FROM node:12-alpine
ENV WORKDIR /usr/src/
WORKDIR $WORKDIR
COPY package*.json $WORKDIR
RUN npm install --production --no-cache
RUN mkdir -p node_modules/.cache && chown -R node:node node_modules/.cache
FROM node:12-alpine
ENV USER node
ENV WORKDIR /home/$USER/app
WORKDIR $WORKDIR
COPY --from=0 /usr/src/node_modules node_modules
RUN chown $USER:$USER $WORKDIR
COPY --chown=node . $WORKDIR
# In production environment uncomment the next line
#RUN chown -R $USER:$USER /home/$USER && chmod -R g-s,o-rx /home/$USER && chmod -R o-wrx $WORKDIR
# Then all further actions including running the containers should be done under non-root user.
USER $USER
EXPOSE 3000