<p align="center">
    <span class="badge-license">
        <img
        src="https://img.shields.io/github/license/Andrsrz/tyra-web?style=for-the-badge"
        alt="License" />
    </span>
    <span class="badge-buymeacoffee">
        <a href="https://www.buymeacoffee.com/andrsrz"
        title="Donate using Buy Me A Coffee">
        <img
        src="https://img.shields.io/static/v1?label=Buy%20Me%20a%20Beer&message=donate&color=FF813F&style=for-the-badge&logo=buy-me-a-coffee"
        alt="Buy Me A Coffee donate button" />
        </a>
    </span>
</p>
<a href=""><img src="https://raw.githubusercontent.com/TyraVet/tyravet-logo/master/tyravet.svg" height="200" align="right"></a>

# Tyra Web API
NodeJS/Express API

- [x] Calendar.
- [x] Clients and Pets.
- [ ] Medical Records.
- [x] Staff Access.
- [ ] Inventory.

## Dependencies
See ```package.json```

## Getting Started
You need to have a [MongoDB](https://www.mongodb.com/) in your system. I suggest
that you get it as a [Docker](https://www.docker.com/) image. The following
steps are to setup your database:

### Pull MongoDB Image
``` sh
sudo docker pull mongo
```
### Create Directory in you system to have persistent data
``` sh
sudo mkdir -p /mongodata
```
### Start the Docker Container and Enter the Bash Shell
``` sh
sudo docker run -it -v /mongodata:/data/db -p 27017:27017 --name mongodb -d mongo
sudo docker exec -it mongodb bash
```
### Create DataBase and Collection
``` sh
mongo
> use tyra-web
> db.tyra.insert({ name: 'test' })
```
### Populate DB from your system
#### Note: admin default password is inside the script
``` sh
node server/populatedb.js
```

Create MongoDB
[backups](https://www.tutorialspoint.com/mongodb/mongodb_create_backup.htm).

### Project setup
```
npm install
```

### For development
```
npm run dev:start
```

### For production
```
npm run start
```

### Run your unit tests
```
npm run test:unit
```

### List of Environment Variables
### ```.env```
| Name | Value |
| ---- | ----- |
| MONGODB_TYRAWEB_TEST | mongodb://host:port/tyra-web-test |
| ACCESS_TOKEN_SECRET | random string |
| PORT | Number above 1024 |
| TYRAWEB_ROUTE_CONFIG | /config |
| TYRAWEB_ROUTE_USERS | /users |
| TYRAWEB_ROUTE_BREED | /breeds |
| TYRAWEB_ROUTE_PETS | /pets |
| TYRAWEB_ROUTE_CLIENTS | /clients |
| TYRAWEB_ROUTE_SERVICES | /services |
| TYRAWEB_ROUTE_DAY_SCHEDULES | /dayschedules |

## Production
If you want to start using this software in a production environment go to our
[Production Guide]().

## Contributing
If you find this project usefull for your professional life, consider
making a donation.

For code contributions, please go to our [Contribution File](https://github.com/tyra-web/tyra-web-api/blob/master/.github/CONTRIBUTING.md)

## License
[MIT](https://mit-license.org/)
