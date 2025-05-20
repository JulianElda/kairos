#!/bin/sh

# Usage: ./add_stroke.sh /path/to/input_folder /path/to/output_folder

INPUT_DIR="$1"
OUTPUT_DIR="$2"

if [ -z "$INPUT_DIR" ] || [ -z "$OUTPUT_DIR" ]; then
  echo "Usage: $0 /path/to/input_folder /path/to/output_folder"
  exit 1
fi

if [ ! -d "$INPUT_DIR" ]; then
  echo "Input directory does not exist: $INPUT_DIR"
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

for FILE in "$INPUT_DIR"/*.svg; do
  if [ ! -f "$FILE" ]; then
    continue
  fi

  BASENAME=$(basename "$FILE" .svg)
  OUTPUT_FILE="$OUTPUT_DIR/$BASENAME.svelte"

  # Read original content
  CONTENT=$(cat "$FILE")

  # Replace existing stroke with stroke="transparent"
  CONTENT=$(echo "$CONTENT" | sed 's/stroke="[^"]*"/stroke="transparent"/')

  # Add stroke="transparent" if not present
  echo "$CONTENT" | grep -q '<svg[^>]*stroke='
  if [ $? -ne 0 ]; then
    CONTENT=$(echo "$CONTENT" | sed 's/<svg\([^>]*\)>/<svg\1 stroke="transparent">/')
  fi

  # Add fill="currentColor" if not already present
  echo "$CONTENT" | grep -q '<svg[^>]*fill='
  if [ $? -ne 0 ]; then
    CONTENT=$(echo "$CONTENT" | sed 's/<svg\([^>]*\)>/<svg\1 fill="currentColor">/')
  fi

  echo "$CONTENT" > "$OUTPUT_FILE"
  echo "Processed: $FILE -> $OUTPUT_FILE"
done
