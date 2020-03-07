import 'reflect-metadata';
import { container, registry, injectable } from 'tsyringe';

type requestMethods = 'get' | 'post' | 'delete' | 'options' | 'put';

export interface RouteDefinition {
    path: string;
    requestMethod: requestMethods;
    methodName: symbol;
}

export const controller = (prefix: string = ''): ClassDecorator => {
    return (target: any) => {
        Reflect.defineMetadata('prefix', prefix, target);
        if (!Reflect.hasMetadata('routes', target)) {
            Reflect.defineMetadata('routes', [], target);
        }
    };
};

export const get = (path: string): PropertyDecorator => {
    return (target: Object, propertyKey: string | symbol) => {
        registerRoutes('get', target, path, propertyKey as symbol);
    }
}

export const post = (path: string): PropertyDecorator => {
    return (target: Object, propertyKey: string | symbol) => {
        registerRoutes('post', target, path, propertyKey as symbol);
    }
}

function registerRoutes(requestMethod: requestMethods, target: Object, path: string, propertyKey: symbol) {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor) as RouteDefinition[];
    routes.push({
        requestMethod,
        path,
        methodName: propertyKey
    });
    Reflect.defineMetadata('routes', routes, target.constructor);
}
