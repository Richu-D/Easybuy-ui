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
  selector: 'bh-Home',
  templateUrl: './Home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class HomeComponent {
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
      this.sd_N2o1h0j7eHq1pLnO(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_N2o1h0j7eHq1pLnO(bh) {
    try {
      bh = this.sd_JkpIfNfcSWww6PtI(bh);
      //appendnew_next_sd_N2o1h0j7eHq1pLnO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N2o1h0j7eHq1pLnO');
    }
  }

  //appendnew_flow_HomeComponent_start

  sd_JkpIfNfcSWww6PtI(bh) {
    try {
      const page = this.page;
      bh.local.statistics = [
        {
          imageUrl: '/Web/Icons/Earning.svg',
          fxFlex: '46',
          details: [
            {
              tittle: 'Earning',
              value: '₹200.00',
            },
          ],
        },
        {
          imageUrl: '/Web/Icons/Clients.svg',
          fxFlex: '46',
          details: [
            {
              tittle: 'Clients',
              value: '20',
            },
          ],
        },
        {
          imageUrl: '/Web/Icons/PriceGraph.svg',
          fxFlex: '100',
          details: [
            {
              tittle: 'Gold',
              value: '₹5600',
            },
            {
              tittle: 'Silver',
              value: '₹5600',
            },
            {
              tittle: 'Platinum',
              value: '₹5600',
            },
          ],
        },
      ];

      bh = this.sd_xXkRTz1m9f0JjOXD(bh);
      //appendnew_next_sd_JkpIfNfcSWww6PtI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JkpIfNfcSWww6PtI');
    }
  }

  sd_xXkRTz1m9f0JjOXD(bh) {
    try {
      this.page.statistics = bh.local.statistics;

      //appendnew_next_sd_xXkRTz1m9f0JjOXD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xXkRTz1m9f0JjOXD');
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
  //appendnew_flow_HomeComponent_Catch
}
