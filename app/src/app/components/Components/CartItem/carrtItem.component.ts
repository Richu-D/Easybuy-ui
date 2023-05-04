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
//append_imports_end

@Component({
  selector: 'bh-carrtItem',
  templateUrl: './carrtItem.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class carrtItemComponent {
  @Input('cart')
  public cart: any = undefined;
  @Output('changeCount')
  public changeCount: any = new EventEmitter<any>();
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_uaTUTKhetY0l4Fv4(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_uaTUTKhetY0l4Fv4(bh) {
    try {
      bh = this.sd_baJ2CV8EskJErTiL(bh);
      //appendnew_next_sd_uaTUTKhetY0l4Fv4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uaTUTKhetY0l4Fv4');
    }
  }

  changeCartCount(
    operation: any = undefined,
    productId: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { operation: operation, productId: productId };
      bh.local = {};

      bh = this.sd_c7ZPISyvr1Aw10Wq(bh);
      //appendnew_next_changeCartCount
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_srZtqE1hLTdSBxIa');
    }
  }

  //appendnew_flow_carrtItemComponent_start

  sd_baJ2CV8EskJErTiL(bh) {
    try {
      const page = this.page;
      console.log(bh, 'cart item bh');

      bh = this.sd_2E5pNaOCcSbA5Jez(bh);
      //appendnew_next_sd_baJ2CV8EskJErTiL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_baJ2CV8EskJErTiL');
    }
  }

  sd_2E5pNaOCcSbA5Jez(bh) {
    try {
      //appendnew_next_sd_2E5pNaOCcSbA5Jez
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2E5pNaOCcSbA5Jez');
    }
  }

  sd_c7ZPISyvr1Aw10Wq(bh) {
    try {
      const page = this.page;
      bh.local.operation = {
        operation: bh.input.operation,
        productId: bh.input.productId,
      };

      bh = this.sd_rlRzsU0Q686DUAhg(bh);
      //appendnew_next_sd_c7ZPISyvr1Aw10Wq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c7ZPISyvr1Aw10Wq');
    }
  }

  sd_rlRzsU0Q686DUAhg(bh) {
    try {
      bh.pageOutput.changeCount.emit(bh.local.operation);

      //appendnew_next_sd_rlRzsU0Q686DUAhg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rlRzsU0Q686DUAhg');
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
  //appendnew_flow_carrtItemComponent_Catch
}
