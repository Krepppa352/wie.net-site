In order for the website to be functional while running locally, you need to enable CORS (Cross-Origin Resource Sharing) in your browser. This is because web browsers block CORS requests made by JavaScript's fetch API since they're neither https nor http.
In firefox, you can do this by typing "about:config" in the address bar and searching for "security.fileuri.strict_origin_policy" and disabling it.
Credit for color palette: https://colorhunt.co/palette/fffaecf5ecd5578e7e3d3d3d
