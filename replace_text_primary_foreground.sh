#!/bin/bash
find src/ -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/bg-primary text-foreground/bg-primary text-primary-foreground/g' {} +
