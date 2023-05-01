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
  selector: 'bh-Product',
  templateUrl: './Product.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ProductComponent {
  @Input('product')
  public product: any = undefined;
  @Output('cancelProduct')
  public cancelProduct: any = new EventEmitter<any>();
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
      this.sd_DZVhFFFTdM2Fw40e(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_DZVhFFFTdM2Fw40e(bh) {
    try {
      bh = this.sd_mqjGan12odfyv6VY(bh);
      //appendnew_next_sd_DZVhFFFTdM2Fw40e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DZVhFFFTdM2Fw40e');
    }
  }

  removeProduct(productId: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { productId: productId };
      bh.local = {};

      bh = this.sd_qd3hGLzszT4bPJZK(bh);
      //appendnew_next_removeProduct
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ImRDb7yLMnf49hBE');
    }
  }

  changeProductCount(
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

      bh = this.sd_zayazj7lYbejt51W(bh);
      //appendnew_next_changeProductCount
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FeSgbjcogz1NPICz');
    }
  }

  //appendnew_flow_ProductComponent_start

  sd_mqjGan12odfyv6VY(bh) {
    try {
      //appendnew_next_sd_mqjGan12odfyv6VY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mqjGan12odfyv6VY');
    }
  }

  sd_qd3hGLzszT4bPJZK(bh) {
    try {
      bh.pageOutput.cancelProduct.emit(bh.input.productId);

      //appendnew_next_sd_qd3hGLzszT4bPJZK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qd3hGLzszT4bPJZK');
    }
  }

  sd_zayazj7lYbejt51W(bh) {
    try {
      const page = this.page;
      bh.local.operation = {
        operation: bh.input.operation,
        productId: bh.input.productId,
      };

      bh = this.sd_CaKMW7spAdQW572V(bh);
      //appendnew_next_sd_zayazj7lYbejt51W
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zayazj7lYbejt51W');
    }
  }

  sd_CaKMW7spAdQW572V(bh) {
    try {
      bh.pageOutput.changeCount.emit(bh.local.operation);

      //appendnew_next_sd_CaKMW7spAdQW572V
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CaKMW7spAdQW572V');
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
  //appendnew_flow_ProductComponent_Catch
}
