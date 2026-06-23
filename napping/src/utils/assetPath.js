const assets = import.meta.glob("../assets/*", {
  eager: true,
  import: "default",
  query: "?url",
});

const assetsByName = Object.fromEntries(
  Object.entries(assets).map(([path, url]) => [path.split("/").pop(), url]),
);

export function assetPath(path) {
  const assetName = path.replace(/^\/+/, "");

  return assetsByName[assetName] ?? `${import.meta.env.BASE_URL}${assetName}`;
}
