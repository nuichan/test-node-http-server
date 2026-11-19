# Running test-node-http-server in Docker

A minimal Node.js 20 HTTP server built on Amazon Linux 2023. It has no npm dependencies.

## Build

From the repository root:

```bash
docker build -t test-node-http-server .
```

## Run

```bash
docker run --rm -p 3000:3000 test-node-http-server
```

## Test

```bash
curl http://localhost:3000/             # Hello World!
curl -i http://localhost:3000/healthcheck  # HTTP 201 OK
```

## Details

- Port: 3000 (HTTP), listening on all interfaces
- Health check: `GET /healthcheck` returns HTTP 201
- Environment variables: none required
- Logs: written to stdout
- Runs as the non-root user `appuser`
