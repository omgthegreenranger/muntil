/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        'MYSQL_HOST': '127.0.0.1',
        'MYSQL_PORT': '3306',
        'MYSQL_DATABASE': 'muntil_db',
        'MYSQL_USER': 'muntil',
        'MYSQL_PASSWORD': 'muntil',
      }
}

module.exports = nextConfig
