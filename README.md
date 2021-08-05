# Vulnerable Node.js App
### Manual Setup

Clone the repository
```bash
git clone git@github.com:ldevernay/vuln-node-app.git; cd dvna
```

Configure the environment variables with your database information
```bash
export MYSQL_USER=dvna
export MYSQL_DATABASE=dvna
export MYSQL_PASSWORD=passw0rd
export MYSQL_HOST=127.0.0.1
export MYSQL_PORT=3306
```

Install Dependencies
```bash
npm install
```

Start the application
```bash
npm start
```

Access the application at http://localhost:9090


## License

MIT
