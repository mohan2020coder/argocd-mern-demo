# Stage 1: Build the React application
FROM node:18 AS build
WORKDIR /app

# Copy package.json and package-lock.json from the frontend directory
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .
RUN npm run build

# Stage 2: Serve the React application using Nginx
FROM nginx:alpine
# Copy the build artifacts from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to allow access to the Nginx server
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
