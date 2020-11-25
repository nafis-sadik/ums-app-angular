
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';


@Injectable()

export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept( req, next){
    req = req.clone({
      setHeaders:{
        Athorization: 'Bearer XX.YY.ZZ'
      }
    })
    return next.handle(req)
  }
}

