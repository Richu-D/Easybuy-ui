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
  selector: 'bh-Profile',
  templateUrl: './Profile.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ProfileComponent {
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
      this.sd_jZ3OpMvU6kiDwiVE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_jZ3OpMvU6kiDwiVE(bh) {
    try {
      bh = this.sd_3BHkjd7D1OEblJl1(bh);
      //appendnew_next_sd_jZ3OpMvU6kiDwiVE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jZ3OpMvU6kiDwiVE');
    }
  }

  //appendnew_flow_ProfileComponent_start

  sd_3BHkjd7D1OEblJl1(bh) {
    try {
      bh = this.profileItems(bh);
      //appendnew_next_sd_3BHkjd7D1OEblJl1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3BHkjd7D1OEblJl1');
    }
  }

  profileItems(bh) {
    try {
      const page = this.page;
      bh.local.profile = [
        'Personal Details',
        'Settings',
        'Contact',
        'Help &FAQs',
        'Sign out',
      ];

      //appendnew_next_profileItems
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uQwjFC6hVJHOPmkv');
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
  //appendnew_flow_ProfileComponent_Catch
}
