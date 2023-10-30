export interface EnquiryDto {
    id: string
    orgId: number
    name: string
    displayName: string
    tradeName: string
    licenseNo: string
    licenseExpiry: string
    country: string
    city: string
    zipcode: string
    address: string
    email: string
    website: string
    createdBy: string
    logoId: any
    registeredOn: string
    updatedBy: string
    approvedOn: string
    rejectedOn: any
    recordStatus: string
    regStatus: string
    reason: string
    version: number
    companyRegSuppliers: CompanyRegSupplier[]
  }
  
  export interface CompanyRegSupplier {
    id: string
    supplier: Supplier
  }
  
  export interface Supplier {
    id: string
    name: string
  }