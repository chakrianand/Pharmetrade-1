# Stage 1: Build
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . . 
RUN npm run build  # This should create the 'dist/' folder

# Stage 2: Production
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install --production

# Copy the built files from the build stage
COPY --from=build /app/dist ./dist

# Expose the port Vite uses by default
EXPOSE 5173

# Start the application
CMD ["node", "dist/index.js"]
