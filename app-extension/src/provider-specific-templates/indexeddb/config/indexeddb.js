export default {
  /**
   * Database name used to store users. If using vuemodel,
   * follow the format `{driverKey}:{usersTableName}`
   */
  dbName: 'local:users',

  /**
   * Database store used to store users. If using vuemodel with indexeddb,
   * follow the format `{driverKey}:{usersTableName}`, and make
   * this value identical to the option `dbName`
   */
  storeName: 'local:users',

  /**
   * This driver is used to testing, so it may makes sense to introduce
   * a mock latency when working with loading state. Try setting
   * it temporarily to a number like `500` while testing.
   */
  mockLatencyMs: 0
}
