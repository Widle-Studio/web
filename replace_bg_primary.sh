#!/bin/bash
find src/ -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/bg-\[#6366F1\]/bg-primary/g' {} +
