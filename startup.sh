#!/bin/bash

# Navigate to the project directory if the script is not run from there
# cd /path/to/your/project

# Install dependencies
echo "Installing project dependencies..."
npm install

if [ $? -ne 0 ]; then
  echo "Failed to install dependencies. Please check npm logs."
  exit 1
fi

# Run the Vite development server on port 9000
echo "Starting the development server on port 9000..."
npm run dev -- --port 9000

if [ $? -ne 0 ]; then
  echo "Failed to start the development server. Please check Vite/npm logs."
  exit 1
fi

echo "Linuxverse Dashboard is running on http://localhost:9000"
