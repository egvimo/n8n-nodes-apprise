# Base image with Node.js and Corepack included (Node 22 recommended)
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:22

# Enable and prepare pnpm via Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Configure pnpm global bin & store locations (user-owned, no root required)
ENV PNPM_HOME="/home/node/.pnpm-global/bin"
ENV PATH="$PNPM_HOME:$PATH"

# Create the directory and give ownership to node
RUN mkdir -p /home/node/.pnpm-global/bin \
    && chown -R node:node /home/node/.pnpm-global \
    && su node -c "pnpm config set global-bin-dir /home/node/.pnpm-global/bin" \
    && su node -c "pnpm config set global-dir /home/node/.pnpm-global"

# Switch back to node user
USER node
