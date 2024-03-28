# Use the official PostgreSQL image from Docker Hub
FROM postgres:latest

# Set environment variables
ENV POSTGRES_DB=nest_db
ENV POSTGRES_USER=nest_user
ENV POSTGRES_PASSWORD=nest_password

# Copy custom initialization scripts to the docker-entrypoint-initdb.d directory
# This directory is automatically executed during container startup
# COPY init.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432
