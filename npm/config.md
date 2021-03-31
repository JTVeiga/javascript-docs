# npm config

## List

```sh
npm config list
```

## Set

```sh
# Set the registry globally
npm config set registry "registry-url"

# Set the registry for the package scope
npm config set "@your-scope":registry "registry-url"
npm config set "@microservicos-api":registry "http://10.129.178.173:8082/repository/microservicos-api-npm"
```

```json
{
  ...
  "publishConfig": {
    "registry": "http://10.129.178.173:8082/repository/microservicos-api-npm"
  },
  ...
}
```
