export interface UserInfo {
  name: string;
  lastName: string;
  birthDay: string;
}

export interface UserDataRequest {
  document_type: string;
  document_number: string;
  phone_number: string;
  privacy_policy: boolean;
  commercial_policy?: boolean;
}

export interface UserData {
  documentType: string;
  documentNumber: string;
  phoneNumber: string;
  privacyPolicy: boolean;
  commercialPolicy: boolean;
}
