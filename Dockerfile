# Multi-stage build for Shiftwheel Universal File Converter
FROM node:22-bookworm-slim

# Install native conversion engines: FFmpeg, ImageMagick, Ghostscript, and archive tools
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    imagemagick \
    ghostscript \
    tar \
    gzip \
    curl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build Vite frontend assets
RUN npm run build

# Expose port
EXPOSE 3000

ENV PORT=3000
ENV NODE_ENV=production

# Start full-stack server
CMD ["npm", "start"]
