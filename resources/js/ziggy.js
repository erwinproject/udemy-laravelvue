const Ziggy = { "url": "http:\/\/localhost", "port": null, "defaults": {}, "routes": { "debugbar.openhandler": { "uri": "_debugbar\/open", "methods": ["GET", "HEAD"] }, "debugbar.clockwork": { "uri": "_debugbar\/clockwork\/{id}", "methods": ["GET", "HEAD"], "parameters": ["id"] }, "debugbar.assets.css": { "uri": "_debugbar\/assets\/stylesheets", "methods": ["GET", "HEAD"] }, "debugbar.assets.js": { "uri": "_debugbar\/assets\/javascript", "methods": ["GET", "HEAD"] }, "debugbar.cache.delete": { "uri": "_debugbar\/cache\/{key}\/{tags?}", "methods": ["DELETE"], "parameters": ["key", "tags"] }, "debugbar.queries.explain": { "uri": "_debugbar\/queries\/explain", "methods": ["POST"] }, "listing.index": { "uri": "listing", "methods": ["GET", "HEAD"] }, "listing.create": { "uri": "listing\/create", "methods": ["GET", "HEAD"] }, "listing.store": { "uri": "listing", "methods": ["POST"] }, "listing.show": { "uri": "listing\/{listing}", "methods": ["GET", "HEAD"], "parameters": ["listing"], "bindings": { "listing": "id" } }, "listing.edit": { "uri": "listing\/{listing}\/edit", "methods": ["GET", "HEAD"], "parameters": ["listing"], "bindings": { "listing": "id" } }, "listing.update": { "uri": "listing\/{listing}", "methods": ["PUT", "PATCH"], "parameters": ["listing"], "bindings": { "listing": "id" } }, "listing.destroy": { "uri": "listing\/{listing}", "methods": ["DELETE"], "parameters": ["listing"], "bindings": { "listing": "id" } }, "storage.local": { "uri": "storage\/{path}", "methods": ["GET", "HEAD"], "wheres": { "path": ".*" }, "parameters": ["path"] } } };
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
