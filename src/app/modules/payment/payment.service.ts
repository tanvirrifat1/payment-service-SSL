import prisma from "../../../shared/prisma";
import { sslService } from "../ssl/ssl.service";

const initPayment = async (data: any) => {
  const sslPaymentUrl = await sslService.initPayment({
    total_amount: data.amount,
    tran_id: data.transactionId,
    cus_name: data.cus_name,
    cus_email: data.cus_email,
    cus_add1: data.address,
    cus_phone: data.phone,
  });

  await prisma.payment.create({
    data: {
      amount: data.amount,
      transactionId: data.transactionId,
      studentId: data.studentId,
    },
  });

  // Now that sslPaymentUrl has been resolved, you can access its properties
  return sslPaymentUrl.redirectGatewayURL;
};

export const PaymentService = {
  initPayment,
};
