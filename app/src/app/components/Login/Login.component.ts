/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Login',
  templateUrl: './Login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class LoginComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_YmaRKlBWymI5tDba(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_YmaRKlBWymI5tDba(bh) {
    try {
      bh = this.sd_lf5L442puyKyI4Bq(bh);
      //appendnew_next_sd_YmaRKlBWymI5tDba
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YmaRKlBWymI5tDba');
    }
  }

  login(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};

      bh = this.sd_bNa4MVXSFaqAsiRy(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ORiy0So4quwGLeD5');
    }
  }

  logg(loginForm: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { loginForm: loginForm };
      bh.local = {};

      bh = this.sd_0fqvQNcYSeQcDBuU(bh);
      //appendnew_next_logg
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8umBNzFPADbpVCaB');
    }
  }

  //appendnew_flow_LoginComponent_start

  sd_lf5L442puyKyI4Bq(bh) {
    try {
      const page = this.page;
      bh.local.credentials = {
        EmployeeId: '',
        Password: '',
      };

      bh = this.sd_RY47kgUNHIZKLOjK(bh);
      //appendnew_next_sd_lf5L442puyKyI4Bq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lf5L442puyKyI4Bq');
    }
  }

  sd_RY47kgUNHIZKLOjK(bh) {
    try {
      this.page.credentials = bh.local.credentials;

      //appendnew_next_sd_RY47kgUNHIZKLOjK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RY47kgUNHIZKLOjK');
    }
  }

  sd_bNa4MVXSFaqAsiRy(bh) {
    try {
      const page = this.page;
      console.log(page.credentials, 'credentials');

      //appendnew_next_sd_bNa4MVXSFaqAsiRy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bNa4MVXSFaqAsiRy');
    }
  }

  sd_0fqvQNcYSeQcDBuU(bh) {
    try {
      const page = this.page;
      console.log(bh.input.loginForm, 'loginForm');

      //appendnew_next_sd_0fqvQNcYSeQcDBuU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0fqvQNcYSeQcDBuU');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_LoginComponent_Catch
}
