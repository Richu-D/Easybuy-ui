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
import { BarcodeReader, BarcodeScanner } from 'dynamsoft-javascript-barcode'; //_splitter_
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
      this.page.pScanner = bh.local.pScanner;

      bh = this.sd_Ze6OgkGFVrNKCQOj(bh);
      //appendnew_next_sd_yGxv4THYziNBSaz7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yGxv4THYziNBSaz7');
    }
  }

  sd_Ze6OgkGFVrNKCQOj(bh) {
    try {
      bh.local.BarcodeReader = BarcodeReader;
      bh.local.BarcodeScanner = BarcodeScanner;

      bh = this.sd_PqraNVbOFRW0sAWc(bh);
      //appendnew_next_sd_Ze6OgkGFVrNKCQOj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ze6OgkGFVrNKCQOj');
    }
  }

  sd_PqraNVbOFRW0sAWc(bh) {
    try {
      bh.local.BARCODE_READER = bh.system.environment.properties.BARCODE_READER;

      bh = this.sd_bAn51UN2NmXoPM9Z(bh);
      //appendnew_next_sd_PqraNVbOFRW0sAWc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PqraNVbOFRW0sAWc');
    }
  }

  async sd_bAn51UN2NmXoPM9Z(bh) {
    try {
      const page = this.page; // console.log(bh.local.BARCODE_READER,"BARCODE_READER")
      // console.log(bh.local.BarcodeReader,"BarcodeReader")
      // console.log(bh.local.BarcodeScanner,"BarcodeScanner")
      BarcodeReader.license = bh.local.BARCODE_READER;
      BarcodeReader.engineResourcePath =
        'https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode/dist/';

      const scanner = await bh.local.BarcodeScanner.createInstance();

      // console.log(scanner,"scanner")
      await scanner.setUIElement(
        (document.querySelector('.dce-video-container') as HTMLElement)
          .parentElement as HTMLElement
      );
      scanner.onFrameRead = (results: any) => {
        for (const result of results) {
          console.log(result.barcodeText);
        }
      };
      scanner.onUniqueRead = (txt, result) => {
        console.log(txt, 'text');
        console.log('Unique Code Found: ', result);
      };
      await scanner.open();

      // console.clear()
      // const cameras = await scanner.getAllCameras();
      // const currentCamera = await scanner.getCurrentCamera();

      // console.log(cameras,"cameras",currentCamera,"currentCamera")

      // if (cameras.length) {
      //   let x = 0
      //  let sampleinterval= setInterval(async ()=>{
      //     await scanner.setCurrentCamera(cameras[x].deviceId);
      //     ++x;
      //     if(x==cameras.length){
      //       // clearInterval(sampleinterval)
      //       // console.log("interval stoped");
      //       x = 0
      //     }
      //   },5000)

      // }

      // await scanner.turnOnTorch();
      // await scanner.turnOffTorch();

      // scanner.barcodeFillStyle = "red";
      let scanSettings = await scanner.getScanSettings();
      scanSettings.whenToPlaySoundforSuccessfulRead = 'unique';
      await scanner.updateScanSettings(scanSettings);

      scanner.setVideoFit('cover');
      let region = [20, 20, 80, 40];
      let settings = await scanner.getRuntimeSettings();
      settings.region = {
        regionLeft: region[0],
        regionTop: region[1],
        regionRight: region[2],
        regionBottom: region[3],
        regionMeasuredByPercentage: 1,
      };
      await scanner.updateRuntimeSettings(settings);
      //center region
      //  let sideLen = Math.min(info.width, info.height) * 0.4;
      //     let precentW = Math.round(sideLen / info.width * 100)
      //     let precentH = Math.round(sideLen / info.height * 100);
      //     let rs = await scanner.getRuntimeSettings();
      //     rs.region.regionLeft = (100 - precentW) / 2;
      //     rs.region.regionRight = (100 + precentW) / 2;
      //     rs.region.regionTop = (100 - precentH) / 2;
      //     rs.region.regionBottom = (100 + precentH) / 2;
      //     rs.region.regionMeasuredByPercentage = 1;
      //     await scanner.updateRuntimeSettings(rs);

      // scanner.barcodeLineWidth = 5;
      // scanner.barcodeStrokeStyle = "rgba(73, 245, 73, 1)";

      // Get the RectangleFrame object
      // var rectangleFrame = scanner.dwt.WebTwainEnv.GetWebTwain('dwtcontrolContainer').ui.rectangleFrame;

      // // Set the border color to red
      // rectangleFrame.setRectangleFrame({
      //     borderColor: '#000000'
      // });

      // // Set the border width to 3 pixels
      // rectangleFrame.setRectangleFrame({
      //     borderWidth: 3
      // });

      // // Set the fill color to blue
      // rectangleFrame.setRectangleFrame({
      //     fillColor: '#0000FF'
      // });

      // // Set the opacity to 0.5
      // rectangleFrame.setRectangleFrame({
      //     opacity: 0.5
      // });

      console.log(
        document.querySelector('.dce-video-container'),
        '.dce-video-containter'
      );

      //appendnew_next_sd_bAn51UN2NmXoPM9Z
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bAn51UN2NmXoPM9Z');
    }
  }

  sd_Tbbl0Bg8Ru7td1Wu(bh) {
    try {
      const page = this.page;
      console.log(bh.local.error, 'Error is here');

      //appendnew_next_sd_Tbbl0Bg8Ru7td1Wu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tbbl0Bg8Ru7td1Wu');
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
      false ||
      this.sd_TLYfDeZqyIClHeDL(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_TLYfDeZqyIClHeDL(bh) {
    const catchConnectedNodes = ['sd_Tbbl0Bg8Ru7td1Wu'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = this.sd_Tbbl0Bg8Ru7td1Wu(bh);
    //appendnew_next_sd_TLYfDeZqyIClHeDL
    return true;
  }
  //appendnew_flow_ScanComponent_Catch
}
