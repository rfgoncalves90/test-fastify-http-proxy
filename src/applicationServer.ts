import { fastifyHttpProxy } from "@fastify/http-proxy";
import { fastify } from "fastify";

console.log("running app");

const appFastify = fastify({
    trustProxy: true
});

appFastify.register(fastifyHttpProxy, {
    upstream: ""
});