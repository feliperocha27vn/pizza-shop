# Use the official Bun image
FROM oven/bun:1.1.0

# Install PostgreSQL client for pg_isready and psql
RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb (if available)
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Copy and make the start script executable
COPY start.sh .
RUN chmod +x start.sh

# Expose the port that the app runs on
EXPOSE 3333

# Command to run the application
CMD ["./start.sh"]