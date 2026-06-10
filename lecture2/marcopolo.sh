#!/usr/bin/env bash

# store directory
MARCO_DIR=""

marco() {
    MARCO_DIR="$(pwd)"
}

# polo: go back to saved directory
polo() {
    if [ -z "$MARCO_DIR" ]; then
        echo "No directory saved. Run marco first."
    else
        cd "$MARCO_DIR" || echo "Failed to change directory"
    fi
}