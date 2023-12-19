import { sslService } from "../ssl/ssl.service";

const initPayment = async (data: any) => {
  const sslPaymentUrl = sslService.initPayment({
    total_amount: data.total_amount,
    tran_id: data.tran_id,
    cus_name: data.cus_name,
    cus_email: data.cus_email,
    cus_add1: data.address,
    cus_phone: data.phone,
  });
  return sslPaymentUrl;
};

export const PaymentService = {
  initPayment,
};
