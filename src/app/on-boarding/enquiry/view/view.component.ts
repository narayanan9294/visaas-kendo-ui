import { Component, Input, ViewEncapsulation } from '@angular/core';
import { EnquiryDto } from '../enquiry.model';
import { SVGIcon, globeOutlineIcon } from "@progress/kendo-svg-icons";
@Component({
  selector: 'enquiry-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  styles: [
    `
    .k-tilelayout-item-header.k-card-header{
      background:#F0F8FF;
    }
    .k-card-title{
      font-size:16px;
    }
    #container {
      height: 100%;
      width: 100%;
      display: flex;
    }
    #leftThing {
      width: 15%;      
    }
    #content {
      width: 85%;      
    }
    .k-tilelayout .k-card{
      border-width:1px;
      border-style:dashed;
      border-radius:15px;
      border-color:#0066b2;
    }
    .k-tilelayout{
      background-color:#ffffff;
      
    }
    .header-class {
      font-size: 14px;
      font-weight:bold;
      color: #007791;
  }
    .custom-card {
      width: 100%; /* Adjust the percentage as needed */
    }
  `,
    
  ],
  encapsulation:ViewEncapsulation.None
})
export class ViewComponent {
  @Input() model:EnquiryDto | undefined;
  public globeOutlineSVG: SVGIcon = globeOutlineIcon;
  public thumbnailSrc ="https://p7.hiclipart.com/preview/783/513/119/computer-icons-form-organization-internet-email-ticket.jpg";
  public lindseyAvatar =
  "https://demos.telerik.com/blazor-ui-dev/images/stack-layout/avatar1.jpg";
public vincenzoAvatar =
  "https://demos.telerik.com/blazor-ui-dev/images/stack-layout/avatar2.jpg";
public marissaAvatar =
  "https://demos.telerik.com/blazor-ui-dev/images/stack-layout/avatar3.jpg";

public lindseyImage =
  "https://demos.telerik.com/blazor-ui-dev/images/stack-layout/dog1.jpg";
public vincenzoImage =
  "https://demos.telerik.com/blazor-ui-dev/images/stack-layout/summer.jpg";
public marissaImage =
  "https://demos.telerik.com/blazor-ui-dev/images/stack-layout/dog2.jpg";
}
