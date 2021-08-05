# JavaScript Template for [Bridge by Smartsheet](https://www.smartsheet.com/platform/bridge) extensions.

A really basic template for JavaScript extensions. See [Documentation](https://smartsheet-bridge.github.io/create-bridge-extension/) for more information on Bridge by Smartsheet extension development.

---

## Getting Started

Click the **Use this template** above the file list and follow the steps to create a new GitHub repository with the same files and layout. See GitHub's guide to [Creating a repository from a template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template#creating-a-repository-from-a-template) for more information.

Once cloned and on your local machine make sure you have the most up to date dependencies by running the following commands.

```bash
npm i @smartsheet-bridge/extension-handler
```

```bash
npm i -D @smartsheet-bridge/extension-scripts
```

## Usage

When running the commands below replace `<insert url here>` with the url of your Bridge by Smartsheet account that you can find in the browser when viewing the application, and `<insert key here>` with an API key that can be generated in your Bridge by Smartsheet account. See [Account Aliases](https://www.npmjs.com/package/@smartsheet-bridge/extension-scripts#account-aliases) for more advanced authentication techniques. 


### `deploy`

```bash
npm run deploy -- --url=<insert url here> --key=<insert key here>
```

### `logs`

```bash
npm run logs -- --url=<insert url here> --key=<insert key here>
```


