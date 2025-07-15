# Example of playwright test example test project woth playwright service workspace
# How to use this example
- clone repo
- npm install
- create playwright workspace by following [getting started](https://aka.ms/pww/docs/manage-workspaces)
- follow [getting started guidance]https://aka.ms/pww/docs/configure-service-endpoint) and set regional endpoint env variable
```
$env:PLAYWRIGHT_SERVICE_URL="wss://...."
```
- az login
- Run test suite
```
npx playwright test --config=playwright.service.config.ts --workers=20
```
