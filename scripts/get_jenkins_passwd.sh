#!/bin/bash

# Function to check Docker availability
check_docker() {
  if command -v docker &> /dev/null; then
    echo "Docker is already installed."
  else
    echo "Docker is not installed. Please install Docker before running this script."
    echo "Refer to the Docker documentation for instructions: https://docs.docker.com/get-docker/"
    exit 1
  fi
}
check_docker

# Prompt the user for the container name
read -p "Enter the Jenkins container name: " CONTAINER_NAME

# Check if the provided container name exists
if ! docker ps -a --format '{{.Names}}' | grep -q "$CONTAINER_NAME"; then
  echo "Container with name '$CONTAINER_NAME' not found. Please provide a valid container name."
  exit 1
fi

# Retrieve the Jenkins initial admin password from the container
JENKINS_PASSWORD=$(docker exec $CONTAINER_NAME cat /var/jenkins_home/secrets/initialAdminPassword 2>/dev/null)

# Check if the password retrieval was successful
if [ -z "$JENKINS_PASSWORD" ]; then
  echo "Failed to retrieve Jenkins initial admin password from the container."
  exit 1
fi

echo "Jenkins initial admin password: $JENKINS_PASSWORD"