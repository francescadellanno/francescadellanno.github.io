# Run locally
Run `npm start`

# Process
- Branch off of develop
- Merge feature branches into develop
- Check everything is working
- Then merge into master
- Do not push changes from master as will break pipeline when you pull remote master (dist folder)
- Just run the cmd below

# Deploy to production
- Run `npm run deploy` from master

# Prettier
- `cmd + shift + p`
- Format document

# Docker
- `docker build . -t <container-name>`
- `docker run -p 8000:80 <container-name>`
- Go to `localhost:8000`
