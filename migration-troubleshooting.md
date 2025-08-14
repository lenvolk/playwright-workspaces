# Troubleshooting Common Migration Issues

This section describes issues you might encounter when migrating from Microsoft Playwright Testing to Playwright Workspaces—and how to resolve them.

**Status:** 1 known issues at this time. If you run into any problems during your migration, [please report them here](https://github.com/Azure/playwright-workspaces/issues) so we can provide guidance and update this guide.

1. ReferenceError: __dirname is not defined in ES module scope
```ReferenceError: __dirname is not defined in ES module scope
    at file:///Users/foo/Projects/bar/v5/node_modules/.pnpm/@azure+playwright@1.0.0-beta.2_@playwright+test@1.51.0/node_modules/@azure/playwright/src/core/playwrightServiceUtils.ts:7:20
    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
    at onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)
    at requireOrImport (/Users/foo/Projects/bar/v5/node_modules/.pnpm/playwright@1.51.0/node_modules/playwright/lib/transform/transform.js:230:24)
```
Resolution: https://github.com/Azure/azure-sdk-for-js/issues/35532

2. I dont see dashboard link at the end of run
Reporting is not offered under App testing playwright workspace hence you wont see any report link. Though, you can see one row entry per Test Run inside azure portal -> Playwright workspace resource -> Test Run, but it would only have number work browser and duration.
