FROM node:20-alpine

ADD app.js app.js

CMD ["node", "app.js"]