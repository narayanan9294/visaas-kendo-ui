export class EnquirySearchRequest111 {
    id:string | undefined;
    name:string | undefined;
    displayName:string | undefined;
    tradeName:string | undefined ;
    licenseNo:string | undefined;
    licenseDate: Date | undefined;
    email:string | undefined;
    registeredOn:Date | undefined;
    regStatus:string | undefined;
    pageSize=10;
    pageNo=1;

    constructor() { }
}