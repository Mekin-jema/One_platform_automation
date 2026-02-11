FROM jenkins/jenkins:lts

# Switch to root to install packages
USER root

# Install Git, CA certificates, Node.js, and Curl
RUN apt-get update && apt-get install -y \
    git \
    ca-certificates \
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && update-ca-certificates \
    && apt-get clean

# Switch back to jenkins user
USER jenkins
