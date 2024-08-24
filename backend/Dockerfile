# Stage 1: Build the application
FROM node:20

RUN apt-get update && apt-get install -y postgresql-client

# # Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json ./

# Install dependencies
RUN npm install
RUN npm install -g dotenv-cli

COPY . .

# Insert into tables some data [items ]
ENTRYPOINT [ "sh", "script.sh" ]