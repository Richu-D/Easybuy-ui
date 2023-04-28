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
  selector: 'bh-Scan',
  templateUrl: './Scan.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ScanComponent {
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
      this.sd_zrAR33Ye7lx66Zgj(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_zrAR33Ye7lx66Zgj(bh) {
    try {
      bh = this.sd_yGxv4THYziNBSaz7(bh);
      //appendnew_next_sd_zrAR33Ye7lx66Zgj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zrAR33Ye7lx66Zgj');
    }
  }

  //appendnew_flow_ScanComponent_start

  sd_yGxv4THYziNBSaz7(bh) {
    try {
      //appendnew_next_sd_yGxv4THYziNBSaz7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yGxv4THYziNBSaz7');
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
  //appendnew_flow_ScanComponent_Catch
}
