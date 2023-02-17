export const myPlugin = {
    install: (app, options) => {
        // inject a globally available $translate() method
        app.config.globalProperties.$uCase = (key) => {
          // retrieve a nested property in `options`
          // using `key` as the path
          return key.toUpperCase();
        }
      }
}