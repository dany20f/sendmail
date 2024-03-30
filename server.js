
import { Resend } from 'resend';

const resend = new Resend('re_Fp5ZZciF_P9XX2tat9WqLt8UdVAiepW1p');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
