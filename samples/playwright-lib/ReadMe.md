# Example of playwright library example sample project woth playwright service workspace
# How to use this example
- clone repo and go to folder
- npm install
- create playwright workspace by following [getting started](https://aka.ms/pww/docs/manage-workspaces)
- follow [getting started guidance]https://aka.ms/pww/docs/configure-service-endpoint) and set regional endpoint env variable
```
$env:PLAYWRIGHT_SERVICE_URL="wss://...."
```
- Generate access token following [guide](https://aka.ms/pww/docs/generate-access-token)
- set token generated in previous step
```
$env:PLAYWRIGHT_SERVICE_ACCESS_TOKEN="TOKEN_VALUE"
```
- Run example script
```
npx ts-node src/example.ts
```