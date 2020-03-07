import 'reflect-metadata';
import { Router } from 'express';
import { container } from 'tsyringe';
import * as controllers from './controllers';
import { RouteDefinition } from './controllers/controller';
import { Colors } from './console';

const routes = Router();

Object.values(controllers).forEach(controller => {
    const _prefix = Reflect.getMetadata('prefix', controller);
    const _routes: Array<RouteDefinition> = Reflect.getMetadata('routes', controller);

    _routes.forEach(_route => {
        routes[_route.requestMethod](`${_prefix}${_route.path}`, async (req, res) => {
            const _instance = container.resolve(controller) as any;
            const _method = _instance[_route.methodName];

            console.log(`${Colors.FgYellow(new Date())}: ${Colors.FgGreen(`[${_route.requestMethod}]`)} ${_prefix}${_route.path}`);
            return await _method.bind(_instance)(req, res);
        })
    })
})
console.log(routes);
export default routes;