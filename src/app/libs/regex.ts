export const REGEX_PATTERNS = {
  password: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
  email: '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$',
  ipAddressWithSubnet: '((1[0-9][0-9])|(2[0-5][0-5])|([0-9][0-9]?))\\.((1[0-9][0-9])|(2[0-5][0-5])|([0-9][0-9]?))\\.((1[0-9][0-9])|(2[0-5][0-5])|([0-9][0-9]?))\\.((1[0-9][0-9])|(2[0-5][0-5])|([0-9][0-9]?))(\\/[1-9][0-9]?)?',
};
