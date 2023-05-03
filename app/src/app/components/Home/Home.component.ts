/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { getuserData } from 'app/sd-services/getuserData'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
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
    Object.assign(this.page, { phoneNumber: undefined });

    //append_listeners
  }

  sd_N2o1h0j7eHq1pLnO(bh) {
    try {
      bh = this.sd_S4hucp4ZDxORguJE(bh);
      //appendnew_next_sd_N2o1h0j7eHq1pLnO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N2o1h0j7eHq1pLnO');
    }
  }

  gotoScan(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_aM1w0sD8kfrb2bNW(bh);
      //appendnew_next_gotoScan
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XwRbDoPq89pHCBbR');
    }
  }

  //appendnew_flow_HomeComponent_start

  sd_S4hucp4ZDxORguJE(bh) {
    try {
      const getuserDataInstance: getuserData =
        this.__page_injector__.get(getuserData);
      this.page.userData = getuserDataInstance['userData'];

      bh = this.sd_JkpIfNfcSWww6PtI(bh);
      //appendnew_next_sd_S4hucp4ZDxORguJE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S4hucp4ZDxORguJE');
    }
  }

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

      console.log(page.userData, 'userdata');

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

  sd_aM1w0sD8kfrb2bNW(bh) {
    try {
      const page = this.page;
      console.log(page.phoneNumber);
      bh.local.isValid = false;
      let userPhoneNumber = `${page.phoneNumber}`;
      console.log(
        userPhoneNumber,
        typeof userPhoneNumber,
        userPhoneNumber.length
      );
      if (userPhoneNumber.length >= 10 && userPhoneNumber.length <= 13) {
        console.log('valid phone number');
        bh.local.isValid = true;
      } else {
        console.log('Invalid phone number');
        bh.local.isValid = false;
      }

      bh = this.sd_hvDLK6DZJLFBUldB(bh);
      //appendnew_next_sd_aM1w0sD8kfrb2bNW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aM1w0sD8kfrb2bNW');
    }
  }

  sd_hvDLK6DZJLFBUldB(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_WZb8ssVdQ1gPIyv9(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hvDLK6DZJLFBUldB');
    }
  }

  sd_WZb8ssVdQ1gPIyv9(bh) {
    try {
      localStorage.setItem(
        'userPhoneNumber',
        JSON.stringify(this.page.phoneNumber)
      );

      bh = this.sd_OkJIavllgUU1n0M1(bh);
      //appendnew_next_sd_WZb8ssVdQ1gPIyv9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WZb8ssVdQ1gPIyv9');
    }
  }

  async sd_OkJIavllgUU1n0M1(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/ui/scan');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_OkJIavllgUU1n0M1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OkJIavllgUU1n0M1');
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
