/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class isEmployeeLoggedIn {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_isEmployeeLoggedIn

  async canActivate(navigationRoute, navigationRouteState) {
    try {
      var bh: any = this.sdService.__constructDefault({
        navigationRoute,
        navigationRouteState,
        local: { status: false },
      });

      bh = await this.sd_1EIDCEWqqHGrORja(bh);
      //appendnew_next_canActivate
      return bh.local.status;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xHaDbYW23nUtHFu3');
    }
  }

  //appendnew_flow_isEmployeeLoggedIn_start

  async sd_1EIDCEWqqHGrORja(bh) {
    try {
      bh.local.employeeData = JSON.parse(localStorage.getItem('employeeData'));

      bh = await this.sd_p8yQbx8vgjmxp0NZ(bh);
      //appendnew_next_sd_1EIDCEWqqHGrORja
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1EIDCEWqqHGrORja');
    }
  }

  async sd_p8yQbx8vgjmxp0NZ(bh) {
    try {
      console.log(bh.local.employeeData, 'employeeData');
      console.log(typeof bh.local.employeeData, 'typeof employeeData');

      bh = await this.sd_fODMtVlBN5Mr4ry2(bh);
      //appendnew_next_sd_p8yQbx8vgjmxp0NZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_p8yQbx8vgjmxp0NZ');
    }
  }

  async sd_fODMtVlBN5Mr4ry2(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['null'](
          bh.local.employeeData,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_qmXTsB4gk4UPpV5y(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ODm9JZC5je8aqp3J(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fODMtVlBN5Mr4ry2');
    }
  }

  async sd_qmXTsB4gk4UPpV5y(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.router.navigate([
        this.sdService.formatPathWithParams(path, undefined),
      ]);

      //appendnew_next_sd_qmXTsB4gk4UPpV5y
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qmXTsB4gk4UPpV5y');
    }
  }

  async sd_ODm9JZC5je8aqp3J(bh) {
    try {
      bh.local.status = true;

      //appendnew_next_sd_ODm9JZC5je8aqp3J
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ODm9JZC5je8aqp3J');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_isEmployeeLoggedIn_Catch
}
